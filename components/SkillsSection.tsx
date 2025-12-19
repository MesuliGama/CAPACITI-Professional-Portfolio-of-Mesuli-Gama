
import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

// HUD Icons Mapping (Custom stylized SVGs for tech-inspired look)
const HUD_ICONS: Record<string, React.ReactNode> = {
  ux: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  ai: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
  html: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 8-4 4 4 4"/><path d="m17 8 4 4-4 4"/><path d="M14 4l-4 16"/></svg>,
  css: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-7.97-2.66c-.3-.1-.53-.41-.53-.74V5.1c0-.33.23-.64.53-.74L12 1.65l7.97 2.71c.3.1.53.41.53.74v12.85c0 .33-.23.64-.53.74L12 21.35z"/><path d="M12 8H8.5V11.5H12"/><path d="M15.5 16H12v-3.5h3.5"/></svg>,
  js: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 13h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7"/><path d="M14 16h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2"/></svg>,
  java: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1v3"/><path d="M10 1v3"/><path d="M14 1v3"/></svg>,
  m365: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  ethics: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
  data: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  cloud: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-4-4.5A7 7 0 1 0 5 13.1c-1.7.3-3 1.8-3 3.4 0 1.9 1.6 3.5 3.5 3.5h12.5z"/></svg>,
  ml: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M17.3 6.7l-3.6 3.6"/><path d="M6.7 17.3l3.6-3.6"/><path d="M17.3 17.3l-3.6-3.6"/><path d="M6.7 6.7l3.6 3.6"/></svg>,
  python: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2a5 5 0 0 0 5 5h3a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V7a5 5 0 0 0-5-5h-3z"/><circle cx="9" cy="6" r="1"/><circle cx="15" cy="18" r="1"/></svg>,
  figma: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M12 16h3.5a3.5 3.5 0 1 1-3.5 3.5V16z"/></svg>,
  azure: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 2H22l-8 18h-6.5l8-18z"/><path d="M2 15.5l5.5-5.5 2 2-5.5 5.5-2-2z"/></svg>,
  photoshop: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 15V9h2a2 2 0 0 1 0 4H7"/><path d="M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2"/></svg>,
  react: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 19a32 32 0 0 0 7.07-1.93 24 24 0 0 0 0-10.14 32 32 0 0 0-14.14 0 24 24 0 0 0 0 10.14A32 32 0 0 0 12 19Z"/></svg>,
  vue: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 10 18L22 4"/><path d="m5 4 7 12 7-12"/></svg>,
  tailwind: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2-2-5 0-7s5-2 7 0-2 5-2 5 2 3 0 5-5 2-7 0 2-5 2-5-2-3 0-5z"/><path d="M12 12c2 2 2 5 0 7s-5 2-7 0 2-5 2-5-2-3 0-5 5-2 7 0-2 5-2 5 2 3 0 5z"/></svg>,
};

const SkillsSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 sm:py-24 bg-primary/5 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
        {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="DNA Synchronization" />
        <div 
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Technical Skills */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl text-primary mb-8 text-center md:text-left font-orbitron uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-secondary mr-3 animate-pulse"></span>
                Technical Proficiency
            </h3>
            <div className="space-y-6">
              {SKILLS.technical.map((skill, index) => {
                const level = typeof skill.level === 'number' ? skill.level : 100;
                const displayStatus = skill.level === 'SYNCED' ? 'SYNCED' : `${skill.level}%`;
                
                return (
                  <div key={index} className="group">
                      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-text-muted font-plex-mono mb-2">
                          <div className="flex items-center gap-3">
                              <div className="text-primary group-hover:text-secondary transition-colors duration-300 transform group-hover:scale-110 flex items-center justify-center">
                                {HUD_ICONS[skill.iconId] || HUD_ICONS.ai}
                              </div>
                              <span className="font-semibold tracking-wide uppercase">{skill.name}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 border ${skill.level === 'SYNCED' ? 'text-primary border-primary/30 group-hover:text-secondary group-hover:border-secondary/30' : 'text-text-muted border-white/10'} transition-colors`}>
                            {displayStatus}
                          </span>
                      </div>
                      <div className="h-1.5 w-full bg-primary/10 rounded-none overflow-hidden relative">
                          {/* Progress Bar with Glitch effect */}
                          <div 
                              className={`h-full bg-primary group-hover:bg-secondary transition-all duration-1000 ease-out relative ${isVisible ? '' : 'w-0'}`}
                              style={{ 
                                width: isVisible ? `${level}%` : '0%',
                                transitionDelay: `${300 + index * 50}ms` 
                              }}
                          >
                              <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[1px] animate-flicker"></div>
                          </div>
                      </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl text-primary mb-8 text-center md:text-left font-orbitron uppercase tracking-wider flex items-center">
                 <span className="w-2 h-2 bg-secondary mr-3 animate-pulse"></span>
                Social Intelligence
            </h3>
             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {SKILLS.soft.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-panel-bg border border-gray-200 dark:border-border-animus text-gray-800 dark:text-text-main font-plex-mono text-sm py-2.5 px-5 shadow-sm dark:shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{ 
                    animationDelay: `${500 + index * 50}ms`, 
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' 
                  }}
                >
                  <span className="mr-2 text-secondary opacity-50 font-bold">#</span>
                  {skill}
                </div>
              ))}
            </div>
            
            {/* Animus Decal Decorator */}
            <div className="mt-12 opacity-20 hidden md:block select-none pointer-events-none">
                <div className="font-orbitron text-[80px] leading-none font-black text-primary/10 tracking-tighter">
                  GENETIC_MEM
                </div>
                <div className="flex gap-4 mt-2">
                   <div className="h-1 w-24 bg-primary/20"></div>
                   <div className="h-1 w-8 bg-secondary/30"></div>
                   <div className="h-1 w-48 bg-primary/10"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
