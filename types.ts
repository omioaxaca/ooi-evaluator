export interface Challenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string; // e.g., Algorithms, Data Structures
  maxScore: number;
  successRate: number;
  isSolved?: boolean;
  description?: string;
}

export interface UserStats {
  rank: number;
  points: number;
  badges: string[];
  solvedCount: number;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  PROBLEMS = 'PROBLEMS',
  WORKSPACE = 'WORKSPACE',
  PROFILE = 'PROFILE'
}

export interface Submission {
  id: string;
  challengeName: string;
  language: string;
  status: 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded';
  timeAgo: string;
}