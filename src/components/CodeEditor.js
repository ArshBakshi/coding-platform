// src/components/CodeEditor.js
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { problemService } from '../services/problemService';

const CodeEditor = ({ initialCode, language, problemSlug }) => {
  const [code, setCode] = useState(initialCode);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await problemService.submitSolution(problemSlug, code);
      setResults(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <span className="text-white" >JavaScript  &nbsp;&nbsp;&nbsp;</span>
        <button
          onClick={handleRunCode} 
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {isLoading ? 'Running...' : 'Run Code'}
        </button>
      </div>

      <div className="flex-grow">
        <Editor
          height="50vh"
          defaultLanguage={language || 'javascript'}
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
          }}
        />
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {results && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold mb-2">Test Results:</h3>
          {results.testResults.map((result, index) => (
            <div
              key={index}
              className={`p-4 mt-2 rounded ${
                result.passed ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              <div className="font-semibold">
                Test Case {index + 1}: {result.passed ? '✓ Passed' : '✗ Failed'}
              </div>
              <div className="mt-2">
                <div>Input: {result.input}</div>
                <div>Expected: {result.expectedOutput}</div>
                <div>Actual: {result.actualOutput}</div>
              </div>
            </div>
          ))}
          
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <div>Runtime: {results.runtime}</div>
            <div>Memory Usage: {results.memory}</div>
            <div className="font-bold mt-2">
              Status: {results.success ? 'All Tests Passed!' : 'Some Tests Failed'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;