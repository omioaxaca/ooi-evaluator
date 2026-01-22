'use client';

import React from 'react';
import { Code2, Trophy, Terminal, LayoutDashboard, ChevronRight } from '../components/Icons';
// import { StatCard } from './StatCard';
import { CourseCard } from '../components/CourseCard';
import { Submission, ViewState } from '@/types';
import { LearningPathCard } from '../components/LearningPathCard';

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
        <p className="mt-1 text-gray-500 dark:text-gray-400">Bienvenido de nuevo, Alex. ¿Listo para resolver algunos problemas?</p>
      </div>

      {/* Hero / Prep Kit */}
      <LearningPathCard 
        onNavigate={onNavigate}
        course_type="Continua tu aprendizaje"
        title="Introduccion a la Programacion"
        description="Aprende los fundamentos necesarios para ser un maestro de la programación."
        course_length="8 semanas"
        course_difficulty="Principiante"
      />
      {/* Grid de Cursos */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Mis Cursos</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <CourseCard 
            title="Introduccion a la Programacion" 
            subtitle="Basicos y Fundamentos" 
            progress={72} 
            icon={<Code2 className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />}
            colorClass="bg-yellow-500 text-yellow-600"
          />
          <CourseCard 
            title="Introduccion a c++" 
            subtitle="Basicos e Intermedios" 
            progress={88} 
            icon={<Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
            colorClass="bg-purple-500 text-purple-600"
          />
        </div>
      </div>

      {/* Recent Submissions */}
      {/* <div>
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
      </div> */}
    </div>
  );
};
