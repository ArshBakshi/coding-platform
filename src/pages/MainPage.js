// src/pages/MainPage.js
import React, { useState } from 'react';
import ProblemList from '../components/ProblemList';
import CodeEditor from '../components/CodeEditor';
import { problemService } from '../services/problemService';

const MainPage = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleProblemSelect = async (titleSlug) => {
    setLoading(true);
    try {
      const problemDetail = await problemService.getProblemDetail(titleSlug);
      setSelectedProblem({
        ...problemDetail,
        titleSlug // Add the titleSlug to the problem details
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-page flex h-screen">
      <div className="sidebar w-1/4 bg-gray-100 overflow-y-auto p-4">
        <ProblemList onProblemSelect={handleProblemSelect} />
      </div>
      <div className="content flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4">Loading problem...</div>
        ) : selectedProblem ? (
          <div className="p-4">
            <div className="problem-description mb-4">
              <h2 className="text-2xl font-bold mb-4">{selectedProblem.title}</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedProblem.content }} 
              />
            </div>
            <CodeEditor
              initialCode={selectedProblem.codeSnippets[0]?.code || '// Write your code here'}
              language="javascript"
              problemSlug={selectedProblem.titleSlug}
            />
          </div>
        ) : (
          <div className="p-4">
            Select a problem from the list to begin
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;