'use client';

import React from 'react';
import { Challenge, ViewState } from '@/types';
import { CheckCircle, Trophy, Search } from '../components/Icons';

interface ChallengeListProps {
  onNavigate: (view: ViewState, challengeId?: string) => void;
}

const CHALLENGES: Challenge[] = [
  { id: '1', title: 'Compare the Triplets', difficulty: 'Easy', category: 'Problem Solving', maxScore: 10, successRate: 96.10, isSolved: false, description: 'Alice and Bob each created one problem for HackerRank.' },
  { id: '2', title: 'Plus Minus', difficulty: 'Easy', category: 'Algorithms', maxScore: 10, successRate: 98.46, isSolved: true, description: 'Calculate the ratios of positive, negative and zero values in an array.' },
  { id: '3', title: 'Staircase', difficulty: 'Easy', category: 'Algorithms', maxScore: 10, successRate: 94.71, isSolved: false, description: 'Print a staircase of size n using # symbols and spaces.' },
  { id: '4', title: 'Birthday Cake Candles', difficulty: 'Medium', category: 'Algorithms', maxScore: 20, successRate: 87.31, isSolved: false, description: 'Count how many candles are tallest on the birthday cake.' },
  { id: '5', title: 'Time Conversion', difficulty: 'Hard', category: 'Algorithms', maxScore: 30, successRate: 65.20, isSolved: false, description: 'Convert 12-hour AM/PM format to military (24-hour) time.' },
];

export const ChallengeList: React.FC<ChallengeListProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      
      {/* Filters Sidebar */}
      <div className="w-full lg:w-64 shrink-0 space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-600 dark:bg-dark-bg" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Solved</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-600 dark:bg-dark-bg" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Unsolved</span>
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Difficulty</h3>
          <div className="space-y-2">
            {['Easy', 'Medium', 'Hard'].map(d => (
              <label key={d} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-600 dark:bg-dark-bg" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{d}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Problem Solving</h1>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search challenges..." 
              className="w-full sm:w-64 rounded-lg border border-gray-200 bg-white py-2 pl-9 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-surface dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-4">
          {CHALLENGES.map((challenge) => (
            <div 
              key={challenge.id}
              className="group flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md dark:border-dark-border dark:bg-dark-surface"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 transition-colors cursor-pointer" onClick={() => onNavigate(ViewState.WORKSPACE, challenge.id)}>
                  {challenge.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className={`${
                    challenge.difficulty === 'Easy' ? 'text-green-600 dark:text-green-400' :
                    challenge.difficulty === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  } font-medium`}>
                    {challenge.difficulty}
                  </span>
                  <span>•</span>
                  <span>Max Score: {challenge.maxScore}</span>
                  <span>•</span>
                  <span>Success Rate: {challenge.successRate}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl line-clamp-1">
                    {challenge.description}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {challenge.isSolved ? (
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-dark-border dark:bg-dark-bg dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Solved
                  </button>
                ) : (
                  <button 
                    onClick={() => onNavigate(ViewState.WORKSPACE, challenge.id)}
                    className="w-full sm:w-auto rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Solve Challenge
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Trophy className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
