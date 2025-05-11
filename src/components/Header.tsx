import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <BookOpen className="text-white mr-3 h-8 w-8" />
        <h1 className="text-3xl font-bold text-white tracking-wide">
          <span className="text-yellow-300">Word</span>Explorers
        </h1>
      </div>
    </header>
  );
};