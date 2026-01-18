'use client';

import React from 'react';
import { Code2, Trophy, Terminal, LayoutDashboard, ChevronRight } from '../components/Icons';
import { StatCard } from './StatCard';
import { Submission, ViewState } from '@/types';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

const RECENT_SUBMISSIONS: Submission[] = [
  { id: '1', challengeName: 'Matrix Rotation', language: 'Python 3', status: 'Accepted', timeAgo: '2 hours ago' },
  { id: '2', challengeName: 'Linked List Cycle', language: 'Java 8', status: 'Wrong Answer', timeAgo: '5 hours ago' },
  { id: '3', challengeName: 'Binary Tree Sort', language: 'C++', status: 'Accepted', timeAgo: '1 day ago' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Welcome back, Alex. Ready to solve some problems?</p>
      </div>

      {/* Hero / Prep Kit */}
      <div className="relative overflow-hidden rounded-2xl bg-dark-surface border border-dark-border p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-900/50 px-3 py-1 text-xs font-medium text-brand-200 ring-1 ring-inset ring-brand-700/30">
              Recommended Path
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">Software Engineer Prep Kit</h2>
            <p className="mt-2 max-w-xl text-gray-300">
              Master the fundamental skills to become a software engineer. This path covers algorithms, data structures, and system design basics.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Terminal className="h-4 w-4" /> 53 Challenges</span>
              <span className="flex items-center gap-1"><Trophy className="h-4 w-4" /> 1 Mock Test</span>
            </div>
          </div>
          <button 
            onClick={() => onNavigate(ViewState.PROBLEMS)}
            className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500 shadow-lg shadow-brand-900/20"
          >
            Continue Learning
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-brand-500 opacity-10 blur-3xl"></div>
      </div>

      {/* Skills Grid */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Your Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <StatCard 
            title="Problem Solving" 
            subtitle="Basics & Intermediate" 
            progress={88} 
            icon={<Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
            colorClass="bg-purple-500 text-purple-600"
          />
          <StatCard 
            title="Python" 
            subtitle="Advanced Concepts" 
            progress={45} 
            icon={<Terminal className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />}
            colorClass="bg-yellow-500 text-yellow-600"
          />
          <StatCard 
            title="Algorithms" 
            subtitle="Sorting & Searching" 
            progress={24} 
            icon={<LayoutDashboard className="h-6 w-6 text-pink-600 dark:text-pink-400" />}
            colorClass="bg-pink-500 text-pink-600"
          />
           <StatCard 
            title="Databases" 
            subtitle="SQL & Normalization" 
            progress={12} 
            icon={<LayoutDashboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
            colorClass="bg-blue-500 text-blue-600"
          />
        </div>
      </div>

      {/* Recent Submissions */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-dark-border dark:bg-dark-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 dark:bg-dark-bg/50 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium">Challenge</th>
                <th className="px-6 py-4 font-medium">Language</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
              {RECENT_SUBMISSIONS.map((sub) => (
                <tr key={sub.id} className="group hover:bg-gray-50 dark:hover:bg-dark-border/50">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{sub.challengeName}</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{sub.language}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      sub.status === 'Accepted' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{sub.timeAgo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
