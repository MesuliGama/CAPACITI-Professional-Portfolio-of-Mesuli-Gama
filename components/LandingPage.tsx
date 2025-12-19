import React from 'react';

interface LandingPageProps {
  onEnterPortfolio: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPortfolio }) => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-dark-bg text-text-main overflow-hidden font-orbitron">
      {/* Background Animus Fog/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 text-center p-4 max-w-4xl">
        <div className="mb-6 opacity-0 animate-fade-in-long" style={{ animationDelay: '0s' }}>
            <span className="text-primary text-sm tracking-[0.5em] uppercase border-b border-primary/30 pb-2">Animus OS v3.0</span>
        </div>

        <h1 className="text-5xl sm:text-8xl font-black mb-2 opacity-0 animate-fade-in-long" style={{ animationDelay: '0.5s' }}>
          <span className="bg-gradient-to-r from-primary via-white to-primary text-transparent bg-clip-text animate-gradient-pan drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]" style={{ backgroundSize: '200% 200%' }}>
            MEMORY SEQUENCE
          </span>
        </h1>
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-6 opacity-0 animate-slide-in-right" style={{ animationDelay: '1s' }}></div>

        <p className="text-xl sm:text-2xl text-text-muted mb-12 opacity-0 animate-fade-in-long font-plex-mono" style={{ animationDelay: '1.5s' }}>
          Subject: Mesuli Gama <span className="text-secondary mx-2">|</span> Synchronization: 98.4%
        </p>
        
        <button
          onClick={onEnterPortfolio}
          className="group relative px-12 py-4 bg-transparent border border-primary/50 text-primary text-xl font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-dark-bg hover:border-primary opacity-0 animate-slide-in-bottom"
          style={{ animationDelay: '2.5s' }}
          aria-label="Load Memory"
        >
            <span className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative z-10">Initialize Session</span>
            
            {/* Corner decorations */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary"></span>
        </button>
        
        <div className="mt-8 text-xs text-primary/40 font-plex-mono uppercase animate-pulse">
            Loading Genetic Memory...
        </div>
      </div>
    </div>
  );
};

export default LandingPage;