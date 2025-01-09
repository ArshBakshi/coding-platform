import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [results, setResults] = useState(null);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedResults = sessionStorage.getItem("examResults");
    const savedReason = sessionStorage.getItem("examEndReason");

    if (!savedResults) {
      navigate("/");
      return;
    }

    setResults(JSON.parse(savedResults));
    setReason(savedReason || "Exam completed");
  }, [navigate]);

  if (!results) {
    return <div>Loading...</div>;
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
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              Exam Results
            </h1>

            {reason && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Exam End Reason: {reason}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Overall Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Overall Score</h2>
                <div
                  className={`text-4xl font-bold ${
                    getGrade(calculateTotalPercentage()).color
                  }`}
                >
                  {calculateTotalPercentage()}%
                </div>
                <div className="text-xl mt-2">
                  Grade: {getGrade(calculateTotalPercentage()).grade}
                </div>
              </div>

              {/* MCQ Section */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Multiple Choice Questions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-sm text-gray-600">Score</div>
                    <div className="text-2xl font-bold">
                      {results.mcq.score}/{results.mcq.total}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-sm text-gray-600">Percentage</div>
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
                <h3 className="text-xl font-semibold mb-4">Coding Questions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-sm text-gray-600">
                      Test Cases Passed
                    </div>
                    <div className="text-2xl font-bold">
                      {results.coding.score}/{results.coding.total}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-sm text-gray-600">Percentage</div>
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

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
