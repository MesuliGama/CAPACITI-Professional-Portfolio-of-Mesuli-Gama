import React from 'react';
import { PROJECTS, EXPERIENCES } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

// Stat card with glassmorphism style, supporting light/dark modes
const StatCard: React.FC<{ value: string; label: string; delay: string }> = ({ value, label, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 text-center border border-white/40 dark:border-secondary/20 shadow-lg transform transition-all duration-500 hover:border-secondary/50 dark:hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] hover:scale-105 hover:bg-white/40 dark:hover:bg-black/30
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: delay }}
    >
      <p className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-secondary font-orbitron">
        {value}
      </p>
      <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mt-2 font-plex-mono">
        {label}
      </p>
    </div>
  );
};

const UXDesignerProfile: React.FC = () => {
  const [containerRef, isContainerVisible] = useOnScreen({ threshold: 0.1 });

  // --- Dynamic Data Calculation (from About.tsx) ---
  const calculateTotalExperience = () => {
    const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    let totalMonths = 0;
    const now = new Date();

    EXPERIENCES.forEach(exp => {
      const durationString = exp.duration.split(',')[0].trim();
      
      const presentMatch = durationString.match(/(\w{3})\s(\d{4})\s-\sPresent/);
      const rangeMatch = durationString.match(/(\w{3})\s(\d{4})\s-\s(\w{3})\s(\d{4})/);
      
      let startMonth, startYear, endMonth, endYear;

      if (presentMatch) {
          startMonth = monthMap[presentMatch[1]];
          startYear = parseInt(presentMatch[2], 10);
          endMonth = now.getMonth();
          endYear = now.getFullYear();
      } else if (rangeMatch) {
          startMonth = monthMap[rangeMatch[1]];
          startYear = parseInt(rangeMatch[2], 10);
          endMonth = monthMap[rangeMatch[3]];
          endYear = parseInt(rangeMatch[4], 10);
      } else {
        return; // Skip if format is not recognized
      }
      
      if (startYear !== undefined && startMonth !== undefined && endYear !== undefined && endMonth !== undefined) {
          const startDate = new Date(startYear, startMonth, 1);
          if (startDate > now) {
              return;
          }
          const endDate = new Date(endYear, endMonth, 1);
          const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
          if(months > 0) {
            totalMonths += months;
          }
      }
    });

    if (totalMonths === 0) return '0';
    return (totalMonths / 12).toFixed(1);
  };
  
  const yearsExperience = calculateTotalExperience();
  const projectsDelivered = PROJECTS.length;
  // --- End of Calculation ---

  return (
    <section id="ux-profile" ref={containerRef as React.RefObject<HTMLDivElement>} className="py-16 sm:py-24 bg-primary/5 dark:bg-dark-bg/50 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-center transition-opacity duration-1000 ${isContainerVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Left Column: Profile Image */}
                <div className={`lg:col-span-1 flex justify-center transform transition-all duration-700 ease-out ${isContainerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-secondary via-accent to-primary opacity-20 dark:opacity-40 blur-xl group-hover:opacity-50 dark:group-hover:opacity-75 transition-all duration-500 animate-pulse-fade"></div>
                        <div className="relative p-2 rounded-full bg-clip-padding bg-gray-200/80 dark:bg-primary/80 backdrop-blur-md border border-gray-300/50 dark:border-secondary/30 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Mesuli Gama"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className={`lg:col-span-2 text-center lg:text-left transform transition-all duration-700 ease-out ${isContainerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                    <h1 className="text-3xl sm:text-5xl font-bold text-primary dark:text-white font-orbitron mb-4">
                        Mesuli Gama — <span className="bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text animate-gradient-pan" style={{ backgroundSize: '200% 200%' }}>UX/UI</span> & AI-Driven Designer
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-plex-mono">
                        A passionate designer at the intersection of creativity and technology. I specialize in crafting intuitive, user-centric experiences and leveraging AI-assisted workflows to solve complex design problems and deliver innovative solutions.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
                        <StatCard value={`${yearsExperience}+`} label="Years Experience" delay="600ms" />
                        <StatCard value={`${projectsDelivered}+`} label="Projects Delivered" delay="750ms" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-secondary/20 text-primary dark:text-secondary font-bold rounded-md shadow-lg hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-secondary text-dark-bg font-bold rounded-md shadow-lg hover:bg-primary dark:hover:bg-primary transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_theme(colors.secondary)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
export default UXDesignerProfile;