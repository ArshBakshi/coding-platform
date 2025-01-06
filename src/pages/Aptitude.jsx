import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';

export const Aptitude = () => {
  const quesData = useLoaderData();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  
  const handleAnswerSelect = (questionIndex, answerKey) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerKey
    }));
  };

  const handleSubmit = () => {
    const results = quesData.map((question, index) => ({
      question,
      selectedAnswer: answers[index] || null,
      isCorrect: answers[index] ? 
        question.correct_answers[`answer_${answers[index]}_correct`] === "true" : 
        false
    }));

    const answeredQuestions = Object.keys(answers).length;
    const score = results.filter(r => r.isCorrect).length;
    
    navigate('/quiz-results', {
      state: {
        results,
        totalQuestions: quesData.length,
        answeredQuestions,
        score
      }
    });
  };

  return (
    <div className="p-6 pb-24 relative min-h-screen">
      <div className="max-w-2xl mx-auto mb-6 bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-3xl font-bold mb-4">Aptitude Quiz</h1>
        <p className="text-gray-600">
          Select your answers and submit when ready. You can submit even if you haven't answered all questions.
        </p>
      </div>
      
      {quesData && quesData.length > 0 ? (
        <div className="space-y-6">
          {quesData.map((question, index) => (
            <QuizQuestion 
              key={index}
              questionIndex={index}
              questionData={question}
              selectedAnswer={answers[index]}
              onAnswerSelect={handleAnswerSelect}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-gray-600">
            {Object.keys(answers).length} of {quesData?.length || 0} questions answered
          </p>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};