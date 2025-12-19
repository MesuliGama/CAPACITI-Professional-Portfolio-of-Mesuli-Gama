import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative mb-16 text-center transform transition-all duration-700
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      aria-hidden={!isVisible}
    >
      <div className="inline-block relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-orbitron uppercase tracking-widest relative z-10 px-8 py-2">
            {title}
        </h2>
        
        {/* Glitch/Scan Lines */}
        <div className="absolute top-0 left-0 w-2 h-full border-l-2 border-primary"></div>
        <div className="absolute top-0 right-0 w-2 h-full border-r-2 border-primary"></div>
        
        {/* Background glow */}
        <div className="absolute inset-0 bg-primary/5 -skew-x-12 z-0 border border-primary/20"></div>
        
        {/* Animus Detail */}
        <div className="absolute -bottom-2 right-0 text-[10px] text-primary font-plex-mono">DB_ENTRY_0{Math.floor(Math.random() * 9)}</div>
      </div>
      
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-4"></div>
    </div>
  );
};

export default SectionHeader;