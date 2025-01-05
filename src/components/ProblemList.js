import React, { useState, useEffect } from 'react';
import { problemService } from '../services/problemService';

const ProblemList = ({ onProblemSelect }) => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await problemService.getAllProblems();
        setProblems(data.stat_status_pairs);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  if (loading) return <div>Loading problems...</div>;

  return (
    <div className="problem-list">
      <h2>Problems</h2>
      <div className="problems-container">
        {problems.map((problem) => (
          <div
            key={problem.stat.question_id}
            className="problem-item"
            onClick={() => onProblemSelect(problem.stat.question_title_slug)}
          >
            <span>{problem.stat.question_title}</span>
            <span className={`difficulty-${problem.difficulty.level}`}>
              {getDifficultyText(problem.difficulty.level)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDifficultyText = (level) => {
  switch (level) {
    case 1: return 'Easy';
    case 2: return 'Medium';
    case 3: return 'Hard';
    default: return 'Unknown';
  }
};

export default ProblemList;
