import React from 'react';

const AnimusBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-dark-bg/80 backdrop-blur-md">
      {/* Static Animus Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)]"
        style={{ backgroundSize: '60px 60px' }}
      ></div>
      
      {/* Floating Geometric Shards */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 transform rotate-45 opacity-30 animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-primary/10 transform -rotate-12 opacity-20 animate-float" style={{ animationDuration: '12s' }}></div>
      
       {/* AC3 HUD Style Corners */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-primary/60"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-primary/60"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-primary/60"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-primary/60"></div>
      
      {/* Central Axis Line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

    </div>
  );
};

export default AnimusBackground;