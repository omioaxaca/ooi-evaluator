'use client';

import React from 'react';
import { 
  Trophy, 
  Code2, 
  Terminal, 
  CheckCircle, 
  LayoutDashboard 
} from '../components/Icons';
import { RechartsWrapper } from './RechartsWrapper';

export const UserProfile: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-1 rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-border dark:bg-dark-surface relative overflow-hidden">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-32 w-32">
              <img 
                src="https://picsum.photos/200/200" 
                alt="Profile" 
                className="h-full w-full rounded-full border-4 border-white object-cover shadow-lg dark:border-dark-bg"
              />
              <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white bg-green-500 dark:border-dark-bg"></span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fernando Mauro <span className="text-xl">🇲🇽</span></h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">@FerMauroLF</p>
            
            <div className="mt-6 flex w-full flex-col gap-3 border-t border-gray-100 pt-6 dark:border-dark-border">
               <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                 <span>fermaurolf@gmail.com</span>
               </div>
               <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                 <span>Mexico</span>
               </div>
            </div>
          </div>
        </div>

        {/* Banner / CTA */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-linear-to-r from-brand-700 to-blue-600 p-8 text-white shadow-lg">
          <div className="relative z-10 h-full flex flex-col justify-center">
             <p className="text-blue-100 font-medium">Complete your profile</p>
             <h2 className="mt-2 text-2xl font-bold">Add your missing details &rarr;</h2>
             <p className="mt-2 text-sm text-blue-100 opacity-80">This data will be helpful to auto-fill your job applications.</p>
             
             <div className="mt-6 inline-block">
                <div className="h-2 w-48 rounded-full bg-blue-900/50">
                  <div className="h-2 w-2/3 rounded-full bg-white"></div>
                </div>
                <span className="mt-1 block text-xs font-bold">60% Complete</span>
             </div>
          </div>
          {/* Decorative */}
          <div className="absolute right-0 top-0 h-full w-1/2 -skew-x-12 bg-white opacity-5"></div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
        <div className="mb-6 flex items-center gap-2">
           <Trophy className="h-6 w-6 text-yellow-500" />
           <h3 className="text-lg font-bold text-gray-900 dark:text-white">My Badges</h3>
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          {['Problem Solving', 'C++', 'Python'].map((badge, idx) => (
             <div key={badge} className="group relative flex cursor-pointer flex-col items-center transition-transform hover:scale-105">
                {/* Hexagon shape simulated via CSS or SVG */}
                <div className="flex h-24 w-24 items-center justify-center bg-amber-100 dark:bg-amber-900/50 clip-hexagon">
                   <div className="text-center">
                     {idx === 0 && <LayoutDashboard className="mx-auto h-8 w-8 text-amber-700 dark:text-amber-400" />}
                     {idx === 1 && <span className="block text-xl font-bold text-amber-700 dark:text-amber-400">C++</span>}
                     {idx === 2 && <Terminal className="mx-auto h-8 w-8 text-amber-700 dark:text-amber-400" />}
                     
                     <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                       {badge}
                     </span>
                     <div className="mt-0.5 text-xs text-amber-600">★★</div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
           <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Activity Graph</h3>
           <div className="h-64 w-full">
             <RechartsWrapper />
           </div>
        </div>
        
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-border dark:bg-dark-surface">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                 <CheckCircle className="h-5 w-5 text-gray-400" />
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <button className="text-sm font-medium text-brand-600 hover:text-brand-500">Add Education</button>
           </div>
           
           <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 dark:border-dark-border dark:bg-dark-bg">
                 <span className="text-gray-400">🏫</span>
              </div>
              <div>
                 <h4 className="font-bold text-gray-900 dark:text-white">University of Tech</h4>
                 <p className="text-sm text-gray-500">Computer Science</p>
                 <p className="text-xs text-gray-400 mt-1">Aug 2019 - Present</p>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
};
