import React, { useState } from 'react';

const QuizQuestion = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const handleAnswerSelection = (answerKey) => {
    if (!answered) {
      setSelectedAnswer(answerKey);
    }
  };

  const checkAnswer = (answerKey) => {
    return questionData.correct_answers[`answer_${answerKey}_correct`] === "true";
  };

  const handleShowAnswer = () => {
    if (selectedAnswer && !answered) {
      setAnswered(true);
      setTotalAttempts(totalAttempts + 1);
      if (checkAnswer(selectedAnswer)) {
        setScore(score + 1);
      }
    }
  };

  const getAnswerClass = (answerKey) => {
    if (!answered) return '';
    if (checkAnswer(answerKey)) return 'bg-green-100 border-green-500';
    if (answerKey === selectedAnswer && !checkAnswer(answerKey)) {
      return 'bg-red-100 border-red-500';
    }
    return '';
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{questionData.question}</h2>
        <p className="text-gray-700 mb-2">{questionData.description}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span className="bg-blue-100 px-2 py-1 rounded">{questionData.difficulty}</span>
          <span className="bg-purple-100 px-2 py-1 rounded">{questionData.category}</span>
        </div>
      </div>

      <div className="space-y-3">
        {Object.keys(questionData.answers)
          .filter(key => questionData.answers[key])
          .map((answerKey, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelection(answerKey.substring(7))}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors
                ${!answered && !selectedAnswer ? 'hover:bg-gray-50' : ''}
                ${selectedAnswer === answerKey.substring(7) ? 'border-blue-500' : 'border-gray-200'}
                ${getAnswerClass(answerKey.substring(7))}`}
            >
              {questionData.answers[answerKey]}
            </div>
          ))}
      </div>

      <button
        onClick={handleShowAnswer}
        disabled={!selectedAnswer || answered}
        className={`mt-6 px-6 py-2 rounded-lg font-medium transition-colors
          ${!selectedAnswer || answered 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        Check Answer
      </button>

      {answered && (
        <div className="mt-6">
          <div className={`p-4 rounded-lg ${checkAnswer(selectedAnswer) ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className="font-medium mb-2">
              {checkAnswer(selectedAnswer) ? '✅ Correct!' : '❌ Incorrect'}
            </p>
            <p className="text-gray-700">{questionData.explanation}</p>
          </div>
          <div className="mt-4 text-gray-600">
            Score: {score}/{totalAttempts} ({((score/totalAttempts) * 100).toFixed(1)}%)
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;