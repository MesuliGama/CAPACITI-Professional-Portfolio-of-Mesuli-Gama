import React from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden"
    >
      {/* 3D Core Cube Styles - Adjusted for Animus Blue */}
      <style>{`
        .scene {
          perspective: 1000px;
          width: 160px;
          height: 160px;
          margin-bottom: 2rem;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 20s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 160px;
          height: 160px;
          background: rgba(14, 165, 233, 0.15); /* Animus Blue Translucent */
          border: 1px solid rgba(14, 165, 233, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.2) inset;
          backdrop-filter: blur(2px);
          font-family: 'Orbitron', sans-serif;
        }
        .cube-face:after {
            content: '';
            position: absolute;
            top: 10px; left: 10px; right: 10px; bottom: 10px;
            border: 1px dashed rgba(14, 165, 233, 0.3);
        }
        .face-front  { transform: rotateY(0deg) translateZ(80px); }
        .face-right  { transform: rotateY(90deg) translateZ(80px); }
        .face-back   { transform: rotateY(180deg) translateZ(80px); }
        .face-left   { transform: rotateY(-90deg) translateZ(80px); }
        .face-top    { transform: rotateX(90deg) translateZ(80px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(80px); }

        @keyframes spin {
          0% { transform: rotateX(-15deg) rotateY(0deg); }
          100% { transform: rotateX(-15deg) rotateY(360deg); }
        }
      `}</style>
      
      <div 
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto backdrop-blur-sm bg-white/60 dark:bg-dark-bg/40 p-8 sm:p-12 rounded-sm border border-gray-200 dark:border-border-animus opacity-0 animate-fade-in shadow-xl dark:shadow-[0_0_50px_rgba(14,165,233,0.1)]"
        style={{ animationDelay: '200ms' }}
      >
        {/* Decorative Header Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* 3D Rotating Cube */}
        <div className="scene opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="cube">
                <div className="cube-face face-front text-primary">MM.G</div>
                <div className="cube-face face-back text-gray-900 dark:text-white">DATA</div>
                <div className="cube-face face-right text-secondary">SYNC</div>
                <div className="cube-face face-left text-gray-900 dark:text-white">CODE</div>
                <div className="cube-face face-top bg-primary/10"></div>
                <div className="cube-face face-bottom bg-primary/10"></div>
            </div>
        </div>
        
        <h1
          className="text-4xl sm:text-7xl font-black text-gray-900 dark:text-text-main mb-4 font-orbitron tracking-tighter opacity-0 animate-slide-up"
          style={{ animationDelay: '600ms', textShadow: '0 0 10px rgba(14,165,233,0.3)' }}
        >
          Mesuli Michael Gama
        </h1>
        
        <p
          className="text-lg sm:text-xl text-primary mb-8 font-plex-mono opacity-0 animate-slide-up tracking-[0.2em] uppercase"
          style={{ animationDelay: '800ms' }}
        >
          // Digital Associate
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-primary/10 border border-primary text-primary font-bold hover:bg-primary hover:text-white dark:hover:text-dark-bg transition-all duration-300 opacity-0 animate-slide-up font-orbitron overflow-hidden"
            style={{ animationDelay: '1000ms' }}
          >
             <span className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-primary"></span>
             <span className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-primary"></span>
            LINKEDIN PROTOCOL
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-transparent border border-secondary/50 text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300 opacity-0 animate-slide-up font-orbitron"
            style={{ animationDelay: '1100ms' }}
          >
            <span className="absolute top-0 left-0 w-1 h-full bg-secondary/0 group-hover:bg-secondary/100 transition-all duration-300"></span>
            ACCESS GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;