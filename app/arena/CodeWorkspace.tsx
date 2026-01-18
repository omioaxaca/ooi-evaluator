'use client';

import React, { useState } from 'react';
import { Play, CheckCircle, Terminal, Settings } from '../components/Icons';

interface CodeWorkspaceProps {
  challengeId?: string;
}

export const CodeWorkspace: React.FC<CodeWorkspaceProps> = ({ challengeId }) => {
  const [code, setCode] = useState(`#include <bits/stdc++.h>\nusing namespace std;\n\nvoid plusMinus(vector<int> arr) {\n    // Type your code here\n    int pos = 0, neg = 0, zero = 0;\n    int n = arr.size();\n    for(int i : arr) {\n        if(i > 0) pos++;\n        else if(i < 0) neg++;\n        else zero++;\n    }\n    printf("%.6f\\n", (double)pos/n);\n    printf("%.6f\\n", (double)neg/n);\n    printf("%.6f\\n", (double)zero/n);\n}\n\nint main() {\n    // Driver code\n    return 0;\n}`);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row overflow-hidden bg-gray-50 dark:bg-dark-bg">
      {/* Problem Description Panel */}
      <div className="w-full lg:w-[45%] flex flex-col border-r border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface overflow-y-auto">
        <div className="sticky top-0 z-10 flex border-b border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface px-6">
          {['Problem', 'Submissions', 'Leaderboard', 'Discussions'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-4 py-4 text-sm font-medium transition-colors ${i === 0 ? 'border-b-2 border-brand-500 text-brand-600 dark:text-brand-400' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="p-8 prose dark:prose-invert max-w-none">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Plus Minus</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Given an array of integers, calculate the ratios of its elements that are <em className="font-serif italic">positive</em>, <em className="font-serif italic">negative</em>, and <em className="font-serif italic">zero</em>. Print the decimal value of each fraction on a new line with <code>6</code> places after the decimal.
          </p>
          
          <div className="my-6 rounded-r-lg border-l-4 border-brand-500 bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100">Note:</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              This challenge introduces precision problems. The test cases are scaled to six decimal places.
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Example</h3>
          <div className="rounded-md bg-gray-100 p-4 font-mono text-sm dark:bg-dark-bg">
            arr = [1, 1, 0, -1, -1]
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
          </p>

          <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">Sample Input</h3>
          <pre className="rounded-md bg-gray-900 p-4 text-gray-100">
            6{'\n'}
            -4 3 -9 0 4 1
          </pre>
        </div>
      </div>

      {/* Code Editor Panel */}
      <div className="flex-1 flex flex-col min-h-[500px]">
        {/* Editor Toolbar */}
        <div className="flex h-12 items-center justify-between border-b border-gray-200 bg-gray-50 px-4 dark:border-dark-border dark:bg-[#1e1e1e]">
          <div className="flex items-center gap-3">
             <div className="relative">
               <select className="h-8 rounded border-gray-300 bg-white pl-2 pr-8 text-xs font-medium dark:border-gray-600 dark:bg-[#2d2d2d] dark:text-gray-200">
                 <option>C++11</option>
                 <option>Python 3</option>
                 <option>JavaScript</option>
                 <option>Java 8</option>
               </select>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <button className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                <Settings className="h-5 w-5" />
             </button>
          </div>
        </div>

        {/* Editor Area (Simulated) */}
        <div className="flex-1 relative bg-white dark:bg-[#1e1e1e] overflow-hidden flex">
          {/* Line Numbers */}
          <div className="hidden sm:flex w-12 flex-col items-end gap-0.5 border-r border-gray-100 bg-gray-50 py-4 pr-3 text-right font-mono text-xs text-gray-400 dark:border-dark-border dark:bg-[#1e1e1e] dark:text-gray-600 select-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="h-5 leading-5">{i + 1}</div>
            ))}
          </div>
          
          {/* Text Area */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 resize-none border-0 bg-transparent p-4 font-mono text-sm leading-5 text-gray-800 outline-none focus:ring-0 dark:text-gray-300 code-font whitespace-pre"
            spellCheck={false}
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white p-4 dark:border-dark-border dark:bg-dark-surface">
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Upload Code as File
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 mr-2">
               <input type="checkbox" id="customInput" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-600 dark:bg-dark-bg" />
               <label htmlFor="customInput" className="text-sm font-medium text-gray-600 dark:text-gray-300">Test against custom input</label>
            </div>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-dark-bg">
              Run Code
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500">
              Submit Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
