import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';

export const Aptitude = () => {
  // Load the data (list of questions)
  const quesData = useLoaderData();

  // Log the data to ensure it's loaded properly
  console.log(quesData);

  return (
    <div>
      <h1>Aptitude Quiz</h1>
      {quesData && quesData.length > 0 ? (
        quesData.map((question, index) => (
          <QuizQuestion key={index} questionData={question} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
