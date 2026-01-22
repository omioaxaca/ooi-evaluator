'use client';

import React from 'react';
import { ChevronRight } from '../components/Icons';

interface StatCardProps {
  title: string;
  subtitle: string;
  progress: number;
  icon: React.ReactNode;
  colorClass: string;
}

export const CourseCard: React.FC<StatCardProps> = ({ title, subtitle, progress, icon, colorClass }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-dark-border dark:bg-dark-surface">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClass} bg-opacity-10 dark:bg-opacity-20`}>
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
        </div>
        <button className="rounded-full p-1 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
          <span>{progress}% Completado</span>
          <span>{100 - progress}% restante</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
          <div 
            className="h-2 rounded-full bg-brand-600 transition-all duration-500" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
