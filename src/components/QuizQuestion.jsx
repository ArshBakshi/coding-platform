import React, { useState } from 'react';

const QuizQuestion = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  // Handle answer selection
  const handleAnswerSelection = (answerKey) => {
    if (!answered) {
      setSelectedAnswer(answerKey);
    }
  };

  // Check if the answer is correct
  const checkAnswer = (answerKey) => {
    return questionData.correct_answers[`answer_${answerKey}_correct`] === "true";
  };

  // Get the appropriate class for the answer based on whether it's correct or incorrect
  const getAnswerClass = (answerKey) => {
    if (answered) {
      return checkAnswer(answerKey) ? 'correct' : 'incorrect';
    }
    return '';
  };

  // Display the correct answer and explanation when the solution button is clicked
  const handleShowAnswer = () => {
    setAnswered(true);
  };

  return (
    <div className="quiz-container">
      <h2>Question: {questionData.question}</h2>
      <p><strong>Description:</strong> {questionData.description}</p>
      <p><strong>Difficulty:</strong> {questionData.difficulty}</p>
      <p><strong>Category:</strong> {questionData.category}</p>
      
      {/* Display answer options */}
      <div className="answer-options">
        {Object.keys(questionData.answers)
          .filter(key => questionData.answers[key])  // Filter out null answers
          .map((answerKey, index) => (
            <div 
              key={index}
              className={`answer-option ${getAnswerClass(answerKey)}`} 
              onClick={() => handleAnswerSelection(answerKey.substring(7))} // Remove "answer_" part
            >
              {questionData.answers[answerKey]}
            </div>
          ))}
      </div>

      {/* Button to show the solution */}
      <button onClick={handleShowAnswer}>Show Solution</button>

      {/* Show the explanation after the answer is selected */}
      {answered && (
        <div className="explanation">
          <p><strong>Explanation:</strong> {questionData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
