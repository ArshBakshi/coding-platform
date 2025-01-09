import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CODING_QUESTIONS = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
    ],
    testCases: [
      {
        input: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
      },
      {
        input: [3, 2, 4],
        target: 6,
        expected: [1, 2],
      },
    ],
    defaultCode: {
      python: "def two_sum(nums, target):\n    # Your code here\n    pass",
      javascript: "function twoSum(nums, target) {\n    // Your code here\n}",
      java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n        return new int[]{};\n    }\n}",
    },
  },
  {
    id: 2,
    title: "Palindrome Check",
    description:
      "Write a function that checks if a given string is a palindrome.",
    examples: [
      {
        input: "'racecar'",
        output: "true",
        explanation: "It reads the same forwards and backwards",
      },
    ],
    testCases: [
      {
        input: "racecar",
        expected: true,
      },
      {
        input: "hello",
        expected: false,
      },
    ],
    defaultCode: {
      python: "def is_palindrome(s):\n    # Your code here\n    pass",
      javascript: "function isPalindrome(s) {\n    // Your code here\n}",
      java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Your code here\n        return false;\n    }\n}",
    },
  },
];

const executeCode = async (code, language, testCases) => {
  const runTestCase = (testCase, code, language) => {
    try {
      let result;
      if (language === "javascript") {
        if (code.includes("twoSum")) {
          const fn = new Function(
            "nums",
            "target",
            `
            ${code}
            return twoSum(nums, target);
          `
          );
          result = fn(testCase.input, testCase.target);
        } else if (code.includes("isPalindrome")) {
          const fn = new Function(
            "s",
            `
            ${code}
            return isPalindrome(s);
          `
          );
          result = fn(testCase.input);
        }

        const passed = Array.isArray(result)
          ? JSON.stringify(result.sort()) ===
            JSON.stringify(testCase.expected.sort())
          : result === testCase.expected;

        return {
          passed,
          actual: result,
          error: null,
        };
      } else if (language === "python" || language === "java") {
        return {
          passed: false,
          actual: null,
          error: `${language} execution requires backend service integration`,
        };
      }
    } catch (error) {
      return {
        passed: false,
        actual: null,
        error: error.message,
      };
    }
  };

  const results = testCases.map((testCase) => ({
    ...runTestCase(testCase, code, language),
    input: testCase.input,
    target: testCase.target,
    expected: testCase.expected,
  }));

  return {
    success: results.some((r) => r.passed),
    results,
  };
};

const CodingSection = ({ currentQuestion, onSubmit }) => {
  const [code, setCode] = useState(currentQuestion.defaultCode.python);
  const [language, setLanguage] = useState("python");
  const [results, setResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [testsPassed, setTestsPassed] = useState(0);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(currentQuestion.defaultCode[newLanguage]);
  };

  const handleRun = async () => {
    setIsRunning(true);
    const executionResults = await executeCode(
      code,
      language,
      currentQuestion.testCases
    );
    setResults(executionResults.results);
    const passed = executionResults.results.filter((r) => r.passed).length;
    setTestsPassed(passed);
    setIsRunning(false);

    onSubmit({
      code,
      language,
      testsPassed: passed,
      totalTests: currentQuestion.testCases.length,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">{currentQuestion.title}</h3>
        <p className="mb-4">{currentQuestion.description}</p>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">Examples:</h4>
          {currentQuestion.examples.map((example, idx) => (
            <div key={idx} className="mb-2">
              <p>Input: {example.input}</p>
              <p>Output: {example.output}</p>
              <p className="text-gray-600">{example.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4 mb-4">
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-96 font-mono p-4 border rounded-lg"
        spellCheck="false"
      />

      <div className="flex space-x-4">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>

      {results && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Test Results:</h4>
          <div className="space-y-2">
            {results.map((result, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${
                  result.passed ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <div className="flex items-center">
                  <span
                    className={
                      result.passed ? "text-green-600" : "text-red-600"
                    }
                  >
                    {result.passed ? "✓" : "✗"}
                  </span>
                  <div className="ml-2">
                    <p>Input: {JSON.stringify(result.input)}</p>
                    {result.target !== undefined && (
                      <p>Target: {JSON.stringify(result.target)}</p>
                    )}
                    <p>Expected: {JSON.stringify(result.expected)}</p>
                    {!result.passed && (
                      <p>
                        Actual:{" "}
                        {result.error
                          ? `Error: ${result.error}`
                          : JSON.stringify(result.actual)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 font-semibold">
              Tests Passed: {testsPassed}/{currentQuestion.testCases.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Exam = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExamOver, setIsExamOver] = useState(false);
  const [isNPressed, setIsNPressed] = useState(false);
  const nKeyRef = useRef(false);
  const [status, setStatus] = useState({
    person_count: 0,
    cellphone_detected: false,
  });
  const [warnings, setWarnings] = useState({
    tabSwitch: 0,
    windowBlur: 0,
    cellphone: 0,
    person: 0,
    noPerson: 0,
    multiplePeople: 0,
  });
  const [alerts, setAlerts] = useState([]);
  const alertIdCounter = useRef(0);
  const monitoringInterval = useRef(null);
  const visibilityTimeout = useRef(null);
  const blurTimeout = useRef(null);
  const [isInitialCheck, setIsInitialCheck] = useState(true);
  const [isCheckPassed, setIsCheckPassed] = useState(false);
  const [checkStatus, setCheckStatus] = useState("Initializing...");
  const [examSection, setExamSection] = useState("mcq");
  const [currentCodingIndex, setCurrentCodingIndex] = useState(0);
  const [codingAnswers, setCodingAnswers] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api_key = process.env.REACT_APP_Api_KEY;
      const api = `https://quizapi.io/api/v1/questions?apiKey=${api_key}&limit=10`;
      try {
        const res = await fetch(api);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "n" || event.key === "N") {
        nKeyRef.current = true;
        setIsNPressed(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (isInitialCheck) {
      startProctoring();
      checkEnvironment();
      const cleanup = monitorTabSwitch();
      return () => {
        cleanup();
        stopProctoring();
      };
    }
  }, []);

  useEffect(() => {
    if (isCheckPassed && !isExamOver) {
      monitoringInterval.current = setInterval(() => {
        fetch("http://127.0.0.1:5000/status")
          .then((response) => response.json())
          .then((data) => {
            setStatus(data);
            handleViolations(data);
          })
          .catch((error) => {
            console.error("Monitoring error:", error);
            addAlert("⚠️ Proctoring system connection lost!", "error");
          });
      }, 1000);

      return () => {
        if (monitoringInterval.current) {
          clearInterval(monitoringInterval.current);
        }
      };
    }
  }, [isCheckPassed, isExamOver]);

  useEffect(() => {
    if (timeLeft > 0 && !isExamOver && isCheckPassed) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleExamEnd("Time's up!");
    }
  }, [timeLeft, isExamOver, isCheckPassed]);

  const startProctoring = () => {
    fetch("http://127.0.0.1:5000/start")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error starting proctoring:", error);
        addAlert("Failed to start proctoring system", "error");
      });
  };

  const stopProctoring = () => {
    fetch("http://127.0.0.1:5000/stop")
      .then((response) => response.json())
      .catch((error) => console.error("Error stopping proctoring:", error));
  };

  const monitorTabSwitch = () => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && !isInitialCheck) {
        clearTimeout(visibilityTimeout.current);
        visibilityTimeout.current = setTimeout(() => {
          setWarnings((prev) => {
            const newCount = prev.tabSwitch + 1;
            if (newCount === 1) {
              addAlert("⚠️ Warning: Tab switch detected!", "warning");
              captureViolationScreenshot();
            } else if (newCount >= 2) {
              handleExamEnd("Test terminated due to multiple tab switches");
            }
            return { ...prev, tabSwitch: newCount };
          });
        }, 200);
      }
    };

    const handleWindowBlur = () => {
      if (!isInitialCheck) {
        clearTimeout(blurTimeout.current);
        blurTimeout.current = setTimeout(() => {
          setWarnings((prev) => {
            const newCount = prev.windowBlur + 1;
            if (newCount === 1) {
              addAlert("⚠️ Warning: Window unfocused!", "warning");
              captureViolationScreenshot();
            } else if (newCount >= 2) {
              handleExamEnd(
                "Test terminated due to multiple window unfocus events"
              );
            }
            return { ...prev, windowBlur: newCount };
          });
        }, 200);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      clearTimeout(visibilityTimeout.current);
      clearTimeout(blurTimeout.current);
    };
  };

  const handleViolations = (data) => {
    if (data.person_count === 0) {
      setWarnings((prev) => {
        const newCount = prev.noPerson + 1;
        if (newCount === 1) {
          addAlert("⚠️ Warning: No person detected!", "warning");
          captureViolationScreenshot();
        } else if (newCount >= 3) {
          handleExamEnd(
            "Test terminated: Extended period with no person detected"
          );
        }
        return { ...prev, noPerson: newCount };
      });
    } else {
      setWarnings((prev) => ({ ...prev, noPerson: 0 }));
    }

    if (data.person_count > 1) {
      setWarnings((prev) => {
        const newCount = prev.multiplePeople + 1;
        if (newCount === 1) {
          addAlert("⚠️ Warning: Multiple people detected!", "warning");
          captureViolationScreenshot();
        } else if (newCount >= 3) {
          handleExamEnd("Test terminated: Multiple people detected repeatedly");
        }
        return { ...prev, multiplePeople: newCount };
      });
    } else {
      setWarnings((prev) => ({ ...prev, multiplePeople: 0 }));
    }

    if (data.cellphone_detected) {
      setWarnings((prev) => {
        const newCount = prev.cellphone + 1;
        if (newCount === 1) {
          addAlert("⚠️ Warning: Cell phone detected!", "warning");
          captureViolationScreenshot();
        } else if (newCount >= 2) {
          handleExamEnd("Test terminated: Cell phone detected multiple times");
        }
        return { ...prev, cellphone: newCount };
      });
    } else {
      setWarnings((prev) => ({ ...prev, cellphone: 0 }));
    }
  };

  const checkEnvironment = () => {
    const checkInterval = setInterval(() => {
      fetch("http://127.0.0.1:5000/status")
        .then((response) => response.json())
        .then((data) => {
          setStatus(data);

          if (data.cellphone_detected) {
            setCheckStatus("⚠️ Please remove any phones from the camera view");
          } else if (data.person_count === 0) {
            setCheckStatus(
              "👤 Please position yourself in front of the camera"
            );
          } else if (data.person_count > 1) {
            setCheckStatus("⚠️ Only one person should be visible");
          } else if (data.person_count === 1 && !data.cellphone_detected) {
            if (!nKeyRef.current) {
              setCheckStatus("Press 'N' to start the exam...");
            } else {
              setCheckStatus(
                "✅ Environment check passed! Starting exam in 3 seconds..."
              );
              clearInterval(checkInterval);
              setTimeout(() => {
                setIsInitialCheck(false);
                setIsCheckPassed(true);
              }, 3000);
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setCheckStatus("⚠️ Error connecting to proctoring system");
        });
    }, 1000);

    return () => clearInterval(checkInterval);
  };

  const captureViolationScreenshot = () => {
    fetch("http://127.0.0.1:5000/screenshot")
      .then((response) => response.json())
      .then((data) =>
        console.log("Violation screenshot captured:", data.filename)
      )
      .catch((error) => console.error("Error capturing screenshot:", error));
  };

  const addAlert = (message, type = "warning") => {
    const id = alertIdCounter.current++;
    setAlerts((prev) => [...prev, { id, message, type }]);
    if (type === "warning") {
      setTimeout(() => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
      }, 5000);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newAnswers = {
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    };
    setSelectedAnswers(newAnswers);
  };

  const handleCodingSubmit = (codingResult) => {
    const newCodingAnswers = {
      ...codingAnswers,
      [currentCodingIndex]: codingResult,
    };
    setCodingAnswers(newCodingAnswers);
  };

  const handleExamEnd = (reason) => {
    setIsExamOver(true);
    stopProctoring();

    // Calculate MCQ score based on API data
    const mcqScore = Object.entries(selectedAnswers).reduce(
      (acc, [idx, answer]) => {
        const correctAnswers = data[idx].correct_answers;
        // Find which answer is marked as correct in the API response
        const correctAnswer = Object.entries(correctAnswers).find(
          ([key, value]) => value === "true"
        );
        const correctKey = correctAnswer
          ? correctAnswer[0].replace("_correct", "")
          : null;
        const isCorrect = data[idx].answers[correctKey] === answer;
        return acc + (isCorrect ? 1 : 0);
      },
      0
    );

    const finalResults = {
      mcq: {
        answers: selectedAnswers,
        score: mcqScore,
        total: data.length,
      },
      coding: {
        answers: codingAnswers,
        score: Object.values(codingAnswers).reduce((acc, result) => {
          return acc + (result.testsPassed || 0);
        }, 0),
        total: Object.values(codingAnswers).reduce((acc, result) => {
          return acc + (result.totalTests || 0);
        }, 0),
      },
    };

    // Store results in sessionStorage
    sessionStorage.setItem("examResults", JSON.stringify(finalResults));
    sessionStorage.setItem("examEndReason", reason);

    // Navigate to results page
    navigate("/result");
  };

  if (isInitialCheck) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Environment Check</h1>
          <div className="mb-6">
            <div className="text-lg mb-4">{checkStatus}</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Camera Connected:</span>
                <span className="font-bold">✅</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Person Detected:</span>
                <span
                  className={`font-bold ${
                    status.person_count === 1
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.person_count === 1 && isNPressed ? "✅" : "❌"}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>No Phone Detected:</span>
                <span
                  className={`font-bold ${
                    !status.cellphone_detected
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {!status.cellphone_detected ? "✅" : "❌"}
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Please ensure:
            <ul className="list-disc text-left pl-5 mt-2">
              <li>You are clearly visible in the camera</li>
              <li>No phones or other devices are visible</li>
              <li>You are in a well-lit environment</li>
              <li>You are the only person visible in the frame</li>
              <li>Press 'N' when ready to start the exam</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Online Exam</h1>
          <div className="text-xl font-semibold">
            Time Left: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setExamSection("mcq")}
            className={`px-4 py-2 rounded-lg ${
              examSection === "mcq"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Multiple Choice
          </button>
          <button
            onClick={() => setExamSection("coding")}
            className={`px-4 py-2 rounded-lg ${
              examSection === "coding"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Coding Questions
          </button>
        </div>

        {examSection === "mcq" ? (
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">
                Question {currentQuestionIndex + 1} of {data.length}
              </h2>
              <span className="text-gray-600">
                {selectedAnswers[currentQuestionIndex]
                  ? "Answered"
                  : "Not answered"}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-lg mb-4">
                {data[currentQuestionIndex]?.question}
              </p>
              <div className="space-y-3">
                {data[currentQuestionIndex]?.answers &&
                  Object.entries(data[currentQuestionIndex].answers)
                    .filter(([key, value]) => value !== null)
                    .map(([key, value], index) => (
                      <div
                        key={index}
                        onClick={() => handleAnswerSelect(value)}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors
                            ${
                              selectedAnswers[currentQuestionIndex] === value
                                ? "bg-blue-100 border-blue-500"
                                : "hover:bg-gray-50"
                            }`}
                      >
                        {value}
                      </div>
                    ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(data.length - 1, prev + 1)
                  )
                }
                disabled={currentQuestionIndex === data.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">
                Question {currentCodingIndex + 1} of {CODING_QUESTIONS.length}
              </h2>
            </div>

            <CodingSection
              currentQuestion={CODING_QUESTIONS[currentCodingIndex]}
              onSubmit={handleCodingSubmit}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setCurrentCodingIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentCodingIndex === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentCodingIndex((prev) =>
                    Math.min(CODING_QUESTIONS.length - 1, prev + 1)
                  )
                }
                disabled={currentCodingIndex === CODING_QUESTIONS.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => handleExamEnd("Exam submitted by user")}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Submit Exam
          </button>
        </div>
      </div>

      <div className="fixed top-4 right-4 w-80 space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg shadow-lg ${
              alert.type === "error"
                ? "bg-red-500 text-white"
                : alert.type === "warning"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exam;
