import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, score, totalQuestions, answeredQuestions } =
    location.state || {};

  if (!results) {
    navigate("/aptitude");
    return null;
  }

  const percentage = ((score / answeredQuestions) * 100).toFixed(1);

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {score}/{totalQuestions}
              </p>
              <p className="text-xl text-gray-600">
                {answeredQuestions === totalQuestions
                  ? `${percentage}% Correct`
                  : `${percentage}% Correct (${answeredQuestions} of ${totalQuestions} questions attempted)`}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">
                {result.question.question}
              </h2>

              <div className="space-y-3">
                {Object.keys(result.question.answers)
                  .filter((key) => result.question.answers[key])
                  .map((answerKey, i) => {
                    const isSelected =
                      result.selectedAnswer === answerKey.substring(7);
                    const isCorrect =
                      result.question.correct_answers[
                        `answer_${answerKey.substring(7)}_correct`
                      ] === "true";

                    return (
                      <div
                        key={i}
                        className={`p-4 border-2 rounded-lg
                          ${
                            isSelected && isCorrect
                              ? "bg-green-100 border-green-500"
                              : ""
                          }
                          ${
                            isSelected && !isCorrect
                              ? "bg-red-100 border-red-500"
                              : ""
                          }
                          ${
                            !isSelected && isCorrect
                              ? "bg-green-50 border-green-300"
                              : ""
                          }
                          ${
                            !isSelected && !isCorrect ? "border-gray-200" : ""
                          }`}
                      >
                        {result.question.answers[answerKey]}
                        {!result.selectedAnswer && isCorrect && (
                          <span className="ml-2 text-green-600">
                            (Correct Answer)
                          </span>
                        )}
                      </div>
                    );
                  })}
              </div>

              {!result.selectedAnswer && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-yellow-700">
                  Question was not attempted
                </div>
              )}

              {result.question.explanation && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">Explanation:</p>
                  <p className="text-gray-700">{result.question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/aptitude")}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
