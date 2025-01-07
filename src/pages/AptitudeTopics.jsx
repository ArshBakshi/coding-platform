import React from "react";
import { useNavigate } from "react-router-dom";

export const AptitudeTopics = () => {
  const navigate = useNavigate();

  const topics = [
    "Linux",
    "DevOps",
    "Networking",
    "Programming",
    "Cloud",
    "Docker",
    "Kubernetes",
  ];

  const handlePracticeClick = (topic) => {
    navigate(`/aptitude/quiz?category=${topic}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Aptitude Topics</h1>
      <ul className="grid grid-cols-2 gap-4">
        {topics.map((topic, index) => (
          <li key={index}>
            <button
              onClick={() => handlePracticeClick(topic)}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
