import React from 'react';

interface SlideshowProgressProps {
  total: number;
  current: number;
}

const SlideshowProgress: React.FC<SlideshowProgressProps> = ({ total, current }) => {
  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === current 
            ? 'w-8 bg-secondary' 
            : 'w-4 bg-secondary/30'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SlideshowProgress;