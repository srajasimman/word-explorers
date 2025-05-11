import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const Celebration: React.FC = () => {
  useEffect(() => {
    // Launch confetti
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ['#4E9AF7', '#56D78C', '#FF9F43', '#FFD53D'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    
    // Play celebration sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2005/2005-preview.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio playback prevented:', e));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white bg-opacity-70 rounded-2xl p-8 text-center animate-bounce shadow-lg">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">Great Job!</h2>
        <p className="text-xl text-blue-800">You completed all the cards!</p>
      </div>
    </div>
  );
};