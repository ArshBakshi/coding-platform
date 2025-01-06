import React from 'react';

const QuizQuestion = ({ questionData, questionIndex, selectedAnswer, onAnswerSelect }) => {
  const handleAnswerSelection = (answerKey) => {
    onAnswerSelect(questionIndex, answerKey);
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
                ${selectedAnswer === answerKey.substring(7) 
                  ? 'bg-blue-50 border-blue-500 shadow-sm' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
            >
              {questionData.answers[answerKey]}
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuizQuestion;