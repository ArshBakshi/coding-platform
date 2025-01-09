import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Separate component for displaying optimal solutions
const OptimalSolutionDisplay = ({ question, submittedCode, language }) => {
  return (
    <div className="mt-6 p-6 bg-gray-50 rounded-lg">
      <h4 className="text-xl font-semibold mb-4 text-blue-700">
        Optimal Solution Reference
      </h4>

      <div className="space-y-6">
        {/* Complexity Analysis */}
        <div className="mb-4">
          <h5 className="font-medium text-gray-800 mb-2">
            Complexity Analysis:
          </h5>
          <div className="bg-white p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-gray-600">Time Complexity:</span>
                <span className="ml-2 font-mono font-medium">
                  {question.complexity.time}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Space Complexity:</span>
                <span className="ml-2 font-mono font-medium">
                  {question.complexity.space}
                </span>
              </div>
            </div>
            <p className="text-gray-700">{question.complexity.explanation}</p>
          </div>
        </div>

        {/* Optimal Implementation */}
        <div>
          <h5 className="font-medium text-gray-800 mb-2">
            Optimal Implementation:
          </h5>
          <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <pre className="text-white">
              <code>{question.optimalSolution[language]}</code>
            </pre>
          </div>
        </div>

        {/* Your Implementation */}
        <div>
          <h5 className="font-medium text-gray-800 mb-2">
            Your Implementation:
          </h5>
          <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <pre className="text-white">
              <code>{submittedCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// Performance Badge component
const PerformanceBadge = ({ performance }) => {
  const badges = {
    excellent: "bg-green-100 text-green-800 border-green-200",
    good: "bg-blue-100 text-blue-800 border-blue-200",
    fair: "bg-yellow-100 text-yellow-800 border-yellow-200",
    poor: "bg-red-100 text-red-800 border-red-200",
  };

  const getPerformanceLevel = (score) => {
    if (score >= 90) return { level: "excellent", text: "Excellent" };
    if (score >= 70) return { level: "good", text: "Good" };
    if (score >= 50) return { level: "fair", text: "Fair" };
    return { level: "poor", text: "Needs Improvement" };
  };

  const { level, text } = getPerformanceLevel(performance);

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium border ${badges[level]}`}
    >
      {text}
    </span>
  );
};

const Results = () => {
  const [results, setResults] = useState(null);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedResults = sessionStorage.getItem("examResults");
    const savedReason = sessionStorage.getItem("examEndReason");
    const savedQuestions = sessionStorage.getItem("codingQuestions");

    if (!savedResults) {
      navigate("/");
      return;
    }

    setResults({
      ...JSON.parse(savedResults),
      questions: JSON.parse(savedQuestions),
    });
    setReason(savedReason || "Exam completed");
  }, [navigate]);

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">
          Loading results...
        </div>
      </div>
    );
  }

  const calculateMCQPercentage = () => {
    return ((results.mcq.score / results.mcq.total) * 100).toFixed(1);
  };

  const calculateCodingPercentage = () => {
    return ((results.coding.score / results.coding.total) * 100).toFixed(1);
  };

  const calculateTotalPercentage = () => {
    const totalScore = results.mcq.score + results.coding.score;
    const totalPossible = results.mcq.total + results.coding.total;
    return ((totalScore / totalPossible) * 100).toFixed(1);
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: "A", color: "text-green-600" };
    if (percentage >= 70) return { grade: "B", color: "text-blue-600" };
    if (percentage >= 50) return { grade: "C", color: "text-yellow-600" };
    if (percentage >= 30) return { grade: "D", color: "text-orange-600" };
    return { grade: "F", color: "text-red-600" };
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              Exam Results
            </h1>

            {/* Exam End Reason */}
            {reason && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-medium">Status:</span> {reason}
                </p>
              </div>
            )}

            <div className="space-y-8">
              {/* Overall Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Overall Performance
                </h2>
                <div
                  className={`text-4xl font-bold mb-2 ${
                    getGrade(calculateTotalPercentage()).color
                  }`}
                >
                  {calculateTotalPercentage()}%
                </div>
                <div className="text-xl mb-4">
                  Grade: {getGrade(calculateTotalPercentage()).grade}
                </div>
                <PerformanceBadge performance={calculateTotalPercentage()} />
              </div>

              {/* Section Scores */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* MCQ Section */}
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Multiple Choice Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">Score</div>
                      <div className="text-2xl font-bold">
                        {results.mcq.score}/{results.mcq.total}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">
                        Percentage
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          getGrade(calculateMCQPercentage()).color
                        }`}
                      >
                        {calculateMCQPercentage()}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coding Section */}
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Coding Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">
                        Test Cases Passed
                      </div>
                      <div className="text-2xl font-bold">
                        {results.coding.score}/{results.coding.total}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">
                        Percentage
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          getGrade(calculateCodingPercentage()).color
                        }`}
                      >
                        {calculateCodingPercentage()}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coding Solutions Review */}
              <div className="border-t pt-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Code Review & Optimization
                </h3>

                {results?.coding?.answers &&
                  Object.entries(results.coding.answers).map(
                    ([index, submission]) => {
                      const question = results.questions[index];
                      return (
                        <div key={index} className="mb-8 p-6 border rounded-lg">
                          <h4 className="text-xl font-semibold mb-4">
                            {question.title}
                          </h4>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="p-4 bg-gray-50 rounded">
                              <div className="text-sm text-gray-600">
                                Tests Passed
                              </div>
                              <div className="text-xl font-bold">
                                {submission.testsPassed}/{submission.totalTests}
                              </div>
                            </div>

                            {/* Optimization Status */}
                            <div
                              className={`p-4 rounded ${
                                submission.optimization?.optimal
                                  ? "bg-green-50"
                                  : "bg-yellow-50"
                              }`}
                            >
                              <div className="text-sm text-gray-600">
                                Solution Efficiency
                              </div>
                              <div className="text-sm mt-1">
                                {submission.optimization?.optimal
                                  ? "✓ Optimal Solution"
                                  : `⚠ ${submission.optimization?.reason}`}
                              </div>
                            </div>
                          </div>

                          {/* Show optimal solution if the submitted solution isn't optimal */}
                          {!submission.optimization?.optimal &&
                            question.optimalSolution && (
                              <OptimalSolutionDisplay
                                question={question}
                                submittedCode={submission.code}
                                language={submission.language}
                              />
                            )}
                        </div>
                      );
                    }
                  )}
              </div>

              {/* Navigation and Next Steps Section */}
              <div className="mt-12 space-y-8">
                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Return to Home
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Print Results
                  </button>
                </div>

                {/* Interview Section */}
                <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm">
                  <h5 className="text-xl font-semibold text-gray-800 mb-3">
                    Ready to Take the Next Step?
                  </h5>
                  <p className="text-gray-600 mb-6">
                    Feeling confident? Put your skills to the test in a mock interview!
                  </p>
                  <NavLink 
                    to="http://localhost:3001/resupload"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    Start Mock Interview
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;