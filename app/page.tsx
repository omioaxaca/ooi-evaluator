'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './dashboard/Dashboard';
import { ChallengeList } from './challenges/ChallengeList';
import { CodeWorkspace } from './arena/CodeWorkspace';
import { UserProfile } from './profile/UserProfile';
import { ViewState } from '@/types';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [activeChallengeId, setActiveChallengeId] = useState<string | undefined>(undefined);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleNavigate = (view: ViewState, challengeId?: string) => {
    setCurrentView(view);
    if (challengeId) {
      setActiveChallengeId(challengeId);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onNavigate={handleNavigate} />;
      case ViewState.PROBLEMS:
        return <ChallengeList onNavigate={handleNavigate} />;
      case ViewState.WORKSPACE:
        return <CodeWorkspace challengeId={activeChallengeId} />;
      case ViewState.PROFILE:
        return <UserProfile />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <main>
        {renderView()}
      </main>
      
      {/* Global Footer (Simple) */}
      <footer className="mt-auto border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400">
        <p>&copy; 2023 CodeJudge Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
