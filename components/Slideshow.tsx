import React, { useState, useEffect } from 'react';
import AnimusBackground from './AnimusBackground';
import SlideshowProgress from './SlideshowProgress';

interface SlideshowProps {
  slides: React.ReactNode[];
  onClose: () => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ slides, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  const navigate = (newIndex: number) => {
    // Reset animation class to re-trigger it
    setAnimationClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimationClass('animate-fade-in');
    }, 50); // Small delay to allow class removal to register
  };

  const goToNext = () => {
    navigate((currentIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    navigate((currentIndex - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, slides.length]); // Re-bind to get the latest currentIndex

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <AnimusBackground />
      
      {/* Main Slide Content Area */}
      <div className="relative z-10 w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full h-full bg-panel-bg backdrop-blur-md rounded-xl shadow-2xl border border-border-animus overflow-hidden">
          <div key={currentIndex} className={`w-full h-full overflow-y-auto p-4 sm:p-8 custom-scrollbar ${animationClass}`}>
            {slides[currentIndex]}
          </div>
        </div>
      </div>
      
      {/* UI Controls Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-between p-2 sm:p-4 pointer-events-none">
        {/* Previous Button */}
        <button 
          onClick={goToPrev} 
          className="p-3 text-secondary bg-dark-bg/50 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 pointer-events-auto hover:shadow-[0_0_20px_theme(colors.secondary)]"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Next Button */}
        <button 
          onClick={goToNext} 
          className="p-3 text-secondary bg-dark-bg/50 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 pointer-events-auto hover:shadow-[0_0_20px_theme(colors.secondary)]"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Top & Bottom UI Bars */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 pointer-events-none">
        <div className="font-orbitron text-secondary text-lg pointer-events-auto">[ MEMORY CORRIDOR ]</div>
        <button 
          onClick={onClose} 
          className="p-3 text-secondary bg-dark-bg/50 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 pointer-events-auto hover:shadow-[0_0_20px_theme(colors.secondary)]"
          aria-label="Exit Presentation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <SlideshowProgress total={slides.length} current={currentIndex} />
      </div>
    </div>
  );
};

export default Slideshow;