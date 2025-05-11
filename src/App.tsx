import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategorySelect } from './components/CategorySelect';
import { FlashCardContainer } from './components/FlashCardContainer';
import { ProgressBar } from './components/ProgressBar';
import { Celebration } from './components/Celebration';
import { wordCategories } from './data/words';
import { Footer } from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('animals');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsCompleted, setCardsCompleted] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const selectedCategoryData = wordCategories.find(cat => cat.id === selectedCategory);
  const totalCards = selectedCategoryData?.words.length || 0;
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentCardIndex(0);
    setCardsCompleted(0);
  };
  
  const handleNextCard = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Completed all cards in this category
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
    setCardsCompleted(prev => prev + 1);
  };
  
  const handleRestart = () => {
    setCurrentCardIndex(0);
    setCardsCompleted(0);
  };
  
  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`flashcard-progress-${selectedCategory}`);
    if (savedProgress) {
      const { cardIndex, completed } = JSON.parse(savedProgress);
      setCurrentCardIndex(cardIndex);
      setCardsCompleted(completed);
    }
  }, [selectedCategory]);
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`flashcard-progress-${selectedCategory}`, JSON.stringify({
      cardIndex: currentCardIndex,
      completed: cardsCompleted
    }));
  }, [currentCardIndex, cardsCompleted, selectedCategory]);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col items-center">
        <CategorySelect 
          categories={wordCategories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategoryChange}
        />
        
        <ProgressBar 
          current={cardsCompleted} 
          total={totalCards} 
          className="mb-6 mt-2"
        />
        
        {selectedCategoryData && (
          <FlashCardContainer 
            word={selectedCategoryData.words[currentCardIndex]}
            onNext={handleNextCard}
            onRestart={handleRestart}
            isLastCard={currentCardIndex === totalCards - 1}
          />
        )}
      </main>
      
      <Footer />
      
      {showCelebration && <Celebration />}
    </div>
  );
}

export default App;