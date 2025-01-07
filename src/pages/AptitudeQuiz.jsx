import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";

export const AptitudeQuiz = () => {
  const quesData = useLoaderData();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleAnswerSelect = (questionIndex, answerKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerKey,
    }));
  };

  const handleSubmit = () => {
    const results = quesData.map((question, index) => ({
      question,
      selectedAnswer: answers[index] || null,
      isCorrect:
        answers[index]
          ? question.correct_answers[`answer_${answers[index]}_correct`] === "true"
          : false,
    }));

    const answeredQuestions = Object.keys(answers).length;
    const score = results.filter((r) => r.isCorrect).length;

    navigate("/quiz-results", {
      state: {
        results,
        totalQuestions: quesData.length,
        answeredQuestions,
        score,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Aptitude Quiz</h1>
      {quesData && quesData.length > 0 ? (
        <div>
          {quesData.map((question, index) => (
            <QuizQuestion
              key={index}
              questionData={question}
              questionIndex={index}
              selectedAnswer={answers[index]}
              onAnswerSelect={handleAnswerSelect}
            />
          ))}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};
