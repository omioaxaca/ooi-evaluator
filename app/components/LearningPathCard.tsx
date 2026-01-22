'use client';
import React from "react";
import { Terminal, Trophy, ChevronRight } from '../components/Icons';
import { ViewState } from '@/types';

interface LearningPathCardProps {
  onNavigate: (view: ViewState) => void;
  course_type: string;
  title: string;
  description: string;
  course_length: string;
  course_difficulty: string;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({ onNavigate, course_type, title, description, course_length, course_difficulty }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-dark-surface border border-dark-border p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-900/50 px-3 py-1 text-xs font-medium text-brand-200 ring-1 ring-inset ring-brand-700/30">
              {course_type}
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">
                {title}
                </h2>
            <p className="mt-2 max-w-xl text-gray-300">
              {description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Terminal className="h-4 w-4" /> {course_length}</span>
              <span className="flex items-center gap-1"><Trophy className="h-4 w-4" /> Dificultad: {course_difficulty}</span>
            </div>
          </div>
          <button 
            onClick={() => onNavigate(ViewState.PROBLEMS)}
            className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500 shadow-lg shadow-brand-900/20"
          >
            Continua con tu aprendizaje
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-brand-500 opacity-10 blur-3xl"></div>
      </div>
  )};