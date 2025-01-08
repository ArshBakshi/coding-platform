import React from "react";
import { useNavigate } from "react-router-dom";
import { Code, Terminal, Server, Box, Container, Globe } from "lucide-react";

export const AptitudeTopics = () => {
  const navigate = useNavigate();

  const topics = [
    {
      name: "Linux",
      icon: <Terminal className="w-8 h-8 mb-3" />,
      description: "Master Linux commands and system administration concepts",
      count: "50+ questions",
      difficulty: "Intermediate",
    },
    {
      name: "DevOps",
      icon: <Server className="w-8 h-8 mb-3" />,
      description: "Learn CI/CD, automation, and cloud infrastructure",
      count: "40+ questions",
      difficulty: "Advanced",
    },
    {
      name: "nodeJS",
      icon: <Globe className="w-8 h-8 mb-3" />,
      description: "Practice Node.js backend development concepts",
      count: "45+ questions",
      difficulty: "Intermediate",
    },
    {
      name: "Django",
      icon: <Code className="w-8 h-8 mb-3" />,
      description: "Test your Python web framework knowledge",
      count: "35+ questions",
      difficulty: "Advanced",
    },
    {
      name: "VueJS",
      icon: <Box className="w-8 h-8 mb-3" />,
      description: "Frontend development with Vue.js framework",
      count: "30+ questions",
      difficulty: "Intermediate",
    },
    {
      name: "Docker",
      icon: <Container className="w-8 h-8 mb-3" />,
      description: "Container technology and orchestration",
      count: "40+ questions",
      difficulty: "Advanced",
    },
    {
      name: "React",
      icon: <Code className="w-8 h-8 mb-3" />,
      description: "Master React components and state management",
      count: "55+ questions",
      difficulty: "Intermediate",
    },
  ];

  const handlePracticeClick = (topic) => {
    navigate(`/aptitude/quiz?category=${topic}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Technical Aptitude Topics
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose a topic to practice questions and improve your technical
            skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="text-blue-400">{topic.icon}</div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {topic.name}
                  </h2>
                  <p className="text-gray-400 mb-4">{topic.description}</p>
                </div>

                <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {topic.count}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {topic.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => handlePracticeClick(topic.name)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                >
                  <span>Start Practice</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AptitudeTopics;
