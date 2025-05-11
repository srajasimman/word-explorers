import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-3 px-6 bg-blue-600 text-white text-center">
      <p className="text-sm">WordExplorers - Learning Made Fun! © {new Date().getFullYear()}</p>
    </footer>
  );
};