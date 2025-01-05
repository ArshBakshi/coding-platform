import axios from 'axios';

// src/services/problemService.js

// Mock problems data structure
const mockProblems = {
    stat_status_pairs: [
      {
        stat: {
          question_id: 1,
          question_title: "Two Sum",
          question_title_slug: "two-sum",
          total_acs: 12345,
          total_submitted: 23456,
        },
        difficulty: { level: 1 }
      },
      {
        stat: {
          question_id: 9,
          question_title: "Palindrome Number",
          question_title_slug: "palindrome-number",
          total_acs: 8765,
          total_submitted: 15678,
        },
        difficulty: { level: 1 }
      },
      {
        stat: {
          question_id: 20,
          question_title: "Valid Parentheses",
          question_title_slug: "valid-parentheses",
          total_acs: 7654,
          total_submitted: 14567,
        },
        difficulty: { level: 1 }
      },
      {
        stat: {
          question_id: 70,
          question_title: "Climbing Stairs",
          question_title_slug: "climbing-stairs",
          total_acs: 6543,
          total_submitted: 13456,
        },
        difficulty: { level: 1 }
      },
      {
        stat: {
          question_id: 121,
          question_title: "Best Time to Buy and Sell Stock",
          question_title_slug: "best-time-to-buy-and-sell-stock",
          total_acs: 5432,
          total_submitted: 12345,
        },
        difficulty: { level: 1 }
      }
    ]
  };
  
  // Detailed mock problem data
  const mockProblemDetails = {
    "two-sum": {
      questionId: "1",
      title: "Two Sum",
      content: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
               <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
               <p>You can return the answer in any order.</p>
               <p><strong>Example 1:</strong></p>
               <pre>
               Input: nums = [2,7,11,15], target = 9
               Output: [0,1]
               Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
               </pre>
               <p><strong>Example 2:</strong></p>
               <pre>
               Input: nums = [3,2,4], target = 6
               Output: [1,2]
               </pre>`,
      difficulty: "Easy",
      hints: ["Create a hash map to store numbers and their indices", "Check if target - current number exists in hash map"],
      codeSnippets: [{
        lang: "javascript",
        code: `/**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  function twoSum(nums, target) {
      // Write your solution here
      
  };`
      }],
      testCases: [
        { input: '[2,7,11,15], 9', expectedOutput: '[0,1]' },
        { input: '[3,2,4], 6', expectedOutput: '[1,2]' },
        { input: '[3,3], 6', expectedOutput: '[0,1]' }
      ],
      solution: `function twoSum(nums, target) {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) {
              return [map.get(complement), i];
          }
          map.set(nums[i], i);
      }
      return [];
  }`
    },
    
    "palindrome-number": {
      questionId: "9",
      title: "Palindrome Number",
      content: `<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>
               <p><strong>Example 1:</strong></p>
               <pre>
               Input: x = 121
               Output: true
               Explanation: 121 reads as 121 from left to right and from right to left.
               </pre>
               <p><strong>Example 2:</strong></p>
               <pre>
               Input: x = -121
               Output: false
               Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
               </pre>`,
      difficulty: "Easy",
      hints: ["Convert to string and compare characters", "Or solve without converting to string by reversing digits"],
      codeSnippets: [{
        lang: "javascript",
        code: `/**
   * @param {number} x
   * @return {boolean}
   */
  function isPalindrome(x) {
      // Write your solution here
      
  };`
      }],
      testCases: [
        { input: '121', expectedOutput: 'true' },
        { input: '-121', expectedOutput: 'false' },
        { input: '10', expectedOutput: 'false' }
      ],
      solution: `function isPalindrome(x) {
      if (x < 0) return false;
      let reversed = 0;
      let original = x;
      while (x > 0) {
          reversed = reversed * 10 + (x % 10);
          x = Math.floor(x / 10);
      }
      return reversed === original;
  }`
    },
  
    "valid-parentheses": {
      questionId: "20",
      title: "Valid Parentheses",
      content: `<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
               <p>An input string is valid if:</p>
               <ol>
                 <li>Open brackets must be closed by the same type of brackets.</li>
                 <li>Open brackets must be closed in the correct order.</li>
                 <li>Every close bracket has a corresponding open bracket of the same type.</li>
               </ol>
               <p><strong>Example 1:</strong></p>
               <pre>
               Input: s = "()"
               Output: true
               </pre>
               <p><strong>Example 2:</strong></p>
               <pre>
               Input: s = "()[]{}"
               Output: true
               </pre>`,
      difficulty: "Easy",
      hints: ["Use a stack to keep track of opening brackets", "Pop from stack when encountering closing bracket"],
      codeSnippets: [{
        lang: "javascript",
        code: `/**
   * @param {string} s
   * @return {boolean}
   */
  function isValid(s) {
      // Write your solution here
      
  };`
      }],
      testCases: [
        { input: '"()"', expectedOutput: 'true' },
        { input: '"()[]{}"', expectedOutput: 'true' },
        { input: '"(]"', expectedOutput: 'false' }
      ],
      solution: `function isValid(s) {
      const stack = [];
      const pairs = {
          ')': '(',
          ']': '[',
          '}': '{'
      };
      
      for (let char of s) {
          if (!pairs[char]) {
              stack.push(char);
          } else if (stack.pop() !== pairs[char]) {
              return false;
          }
      }
      
      return stack.length === 0;
  }`
    },
  
    "climbing-stairs": {
      questionId: "70",
      title: "Climbing Stairs",
      content: `<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>
               <p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>
               <p><strong>Example 1:</strong></p>
               <pre>
               Input: n = 2
               Output: 2
               Explanation: There are two ways to climb to the top.
               1. 1 step + 1 step
               2. 2 steps
               </pre>
               <p><strong>Example 2:</strong></p>
               <pre>
               Input: n = 3
               Output: 3
               Explanation: There are three ways to climb to the top.
               1. 1 step + 1 step + 1 step
               2. 1 step + 2 steps
               3. 2 steps + 1 step
               </pre>`,
      difficulty: "Easy",
      hints: ["Think about the Fibonacci sequence", "Use dynamic programming to optimize"],
      codeSnippets: [{
        lang: "javascript",
        code: `/**
   * @param {number} n
   * @return {number}
   */
  function climbStairs(n) {
      // Write your solution here
      
  };`
      }],
      testCases: [
        { input: '2', expectedOutput: '2' },
        { input: '3', expectedOutput: '3' },
        { input: '4', expectedOutput: '5' }
      ],
      solution: `function climbStairs(n) {
      if (n <= 2) return n;
      let prev = 1, curr = 2;
      for (let i = 3; i <= n; i++) {
          [prev, curr] = [curr, prev + curr];
      }
      return curr;
  }`
    },
  
    "best-time-to-buy-and-sell-stock": {
      questionId: "121",
      title: "Best Time to Buy and Sell Stock",
      content: `<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i</code>th day.</p>
               <p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>
               <p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>
               <p><strong>Example 1:</strong></p>
               <pre>
               Input: prices = [7,1,5,3,6,4]
               Output: 5
               Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
               </pre>`,
      difficulty: "Easy",
      hints: ["Keep track of minimum price seen so far", "Update max profit if current price - min price is larger"],
      codeSnippets: [{
        lang: "javascript",
        code: `/**
   * @param {number[]} prices
   * @return {number}
   */
  function maxProfit(prices) {
      // Write your solution here
      
  };`
      }],
      testCases: [
        { input: '[7,1,5,3,6,4]', expectedOutput: '5' },
        { input: '[7,6,4,3,1]', expectedOutput: '0' }
      ],
      solution: `function maxProfit(prices) {
      let minPrice = Infinity;
      let maxProfit = 0;
      
      for (let price of prices) {
          minPrice = Math.min(minPrice, price);
          maxProfit = Math.max(maxProfit, price - minPrice);
      }
      
      return maxProfit;
  }`
    }
  };
  
  // Problem service implementation
  export const problemService = {
    // Get all problems
    async getAllProblems() {
      try {
        // In real implementation, this would be an API call
        return mockProblems;
      } catch (error) {
        console.error('Error fetching problems:', error);
        throw error;
      }
    },
  
    // Get specific problem details
    async getProblemDetail(titleSlug) {
      try {
        // In real implementation, this would be an API call
        return mockProblemDetails[titleSlug] || null;
      } catch (error) {
        console.error('Error fetching problem detail:', error);
        throw error;
      }
    },
  
    // Submit solution for testing
    async submitSolution(titleSlug, code, language = 'javascript') {
      try {
        const problem = mockProblemDetails[titleSlug];
        if (!problem) throw new Error('Problem not found');
  
        // Mock test execution
        const testResults = problem.testCases.map(testCase => {
          try {
            // In a real implementation, this would be handled by a secure backend
            const userFunc = new Function(`return ${code}`)();
            const input = JSON.parse(`[${testCase.input}]`);
            const result = userFunc(...input);
            const expected = JSON.parse(testCase.expectedOutput);
            const passed = JSON.stringify(result) === JSON.stringify(expected);
            
            return {
              input: testCase.input,
              expectedOutput: testCase.expectedOutput,
              actualOutput: JSON.stringify(result),
              passed
            };
          } catch (error) {
            return {
              input: testCase.input,
              expectedOutput: testCase.expectedOutput,
              actualOutput: 'Error: ' + error.message,
              passed: false
            };
          }
        });
  
        return {
          success: testResults.every(result => result.passed),
          testResults,
          runtime: '85 ms',
          memory: '42.1 MB'
        };
      } catch (error) {
        console.error('Error submitting solution:', error);
        throw error;
      }
    },
  
    // Get hints for a problem
    async getHints(titleSlug) {
      try {
        const problem = mockProblemDetails[titleSlug];
        return problem ? problem.hints : [];
      } catch (error) {
        console.error('Error fetching hints:', error);
        throw error;
      }
    },
  
    // Get solution for a problem
    async getSolution(titleSlug) {
      try {
        const problem = mockProblemDetails[titleSlug];
        return problem ? problem.solution : null;
      } catch (error) {
        console.error('Error fetching solution:', error);
        throw error;
      }
    }
  };