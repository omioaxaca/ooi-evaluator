'use client';

import React from 'react';
import { Search, Bell, Moon, Sun, Menu } from './Icons';
import { ViewState } from '@/types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDark, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-dark-surface border-gray-200 dark:border-dark-border px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate(ViewState.DASHBOARD)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-600 text-white font-bold">
              <img src="/favicon.ico" alt="OOI Logo" className="h-full w-full" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Juez OOI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => onNavigate(ViewState.DASHBOARD)}
              className={`${currentView === ViewState.DASHBOARD ? 'text-brand-600 dark:text-brand-500' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'}`}
            >
              Panel
            </button>
            <button 
              onClick={() => onNavigate(ViewState.PROBLEMS)}
              className={`${currentView === ViewState.PROBLEMS || currentView === ViewState.WORKSPACE ? 'text-brand-600 dark:text-brand-500' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'}`}
            >
              Problemas
            </button>
            {/* <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Certify
            </button>
            <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Compete
            </button> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <input 
              type="text" 
              placeholder="Search challenges..." 
              className="h-9 w-64 rounded-md border border-gray-300 bg-gray-50 pl-9 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
            />
          </div>
          
          <button 
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-border"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-border relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-dark-surface"></span>
          </button>

          <button 
            onClick={() => onNavigate(ViewState.PROFILE)}
            className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 hover:bg-gray-100 dark:hover:bg-dark-border"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full bg-brand-100">
               <img src="https://picsum.photos/100/100" alt="Avatar" className="h-full w-full object-cover" />
            </div>
            <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-200 md:block">Alex</span>
          </button>
          
          <button className="md:hidden text-gray-500 dark:text-gray-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
