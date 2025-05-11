import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategorySelectProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="w-full max-w-3xl mb-6">
      <h2 className="text-xl font-bold text-blue-800 mb-3 text-center">Choose a Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className={`
              p-4 rounded-xl shadow-md transition-all text-center
              ${selectedCategory === category.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-blue-700 hover:bg-blue-100'}
            `}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">{category.emoji}</span>
              <span className="font-medium">{category.name}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};