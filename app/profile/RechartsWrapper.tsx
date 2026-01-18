'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', solved: 4 },
  { name: 'Tue', solved: 3 },
  { name: 'Wed', solved: 7 },
  { name: 'Thu', solved: 2 },
  { name: 'Fri', solved: 5 },
  { name: 'Sat', solved: 8 },
  { name: 'Sun', solved: 6 },
];

export const RechartsWrapper: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
        <XAxis dataKey="name" tick={{fontSize: 12, fill: '#9ca3af'}} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
        />
        <Area type="monotone" dataKey="solved" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorSolved)" strokeWidth={3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
