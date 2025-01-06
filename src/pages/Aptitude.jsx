import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';

export const Aptitude = () => {
  const quesData = useLoaderData();
  const [totalScore, setTotalScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const handleScoreUpdate = (isCorrect) => {
    setTotalAttempts(prev => prev + 1);
    if (isCorrect) {
      setTotalScore(prev => prev + 1);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto mb-6 bg-white rounded-lg shadow-lg p-4">
        <h1 className="text-3xl font-bold mb-4">Aptitude Quiz</h1>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-lg font-medium">
            Total Score: {totalScore}/{totalAttempts}
            {totalAttempts > 0 && 
              ` (${((totalScore/totalAttempts) * 100).toFixed(1)}%)`
            }
          </p>
        </div>
      </div>
      
      {quesData && quesData.length > 0 ? (
        <div className="space-y-6">
          {quesData.map((question, index) => (
            <QuizQuestion 
              key={index} 
              questionData={question}
              onScoreUpdate={handleScoreUpdate}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
};