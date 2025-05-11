import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ChevronRight, RotateCcw } from 'lucide-react';
import { Word } from '../types';

interface FlashCardContainerProps {
  word: Word;
  onNext: () => void;
  onRestart: () => void;
  isLastCard: boolean;
}

export const FlashCardContainer: React.FC<FlashCardContainerProps> = ({
  word,
  onNext,
  onRestart,
  isLastCard
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleNextCard = () => {
    setIsFlipped(false);
    onNext();
  };
  
  const handleSpeakWord = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.rate = 0.8; // Slightly slower for children
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative h-[350px] w-full perspective">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={word.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div 
              onClick={handleFlip}
              className="w-full h-full relative flex"
            >
              <motion.div
                className={`
                  absolute inset-0 w-full h-full rounded-2xl backface-hidden
                  flex flex-col items-center justify-center p-6
                  bg-white shadow-xl cursor-pointer
                  ${isFlipped ? 'hidden' : 'block'}
                `}
              >
                <div className="text-9xl mb-4">
                  {word.emoji}
                </div>
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeakWord();
                    }}
                    className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                className={`
                  absolute inset-0 w-full h-full rounded-2xl backface-hidden
                  flex flex-col items-center justify-center p-6
                  bg-white shadow-xl cursor-pointer
                  ${isFlipped ? 'block' : 'hidden'}
                `}
              >
                <h3 className="text-6xl font-bold mb-6 text-blue-700">
                  {word.word}
                </h3>
                <p className="text-xl text-gray-600 text-center">
                  {word.description}
                </p>
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeakWord();
                    }}
                    className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-6 flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-50 flex items-center shadow-md"
        >
          <RotateCcw size={20} className="mr-2" />
          Restart
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextCard}
          className="px-5 py-2 rounded-full bg-green-500 text-white flex items-center shadow-md"
        >
          {isLastCard ? 'Complete' : 'Next'}
          <ChevronRight size={20} className="ml-1" />
        </motion.button>
      </div>
    </div>
  );
};