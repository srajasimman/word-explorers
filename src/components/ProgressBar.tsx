import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0;
  
  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="flex justify-between mb-1 items-center">
        <span className="text-sm font-medium text-blue-700">Progress</span>
        <span className="text-sm font-medium text-blue-700">{current} of {total}</span>
      </div>
      
      <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};