import React from 'react';
import SectionHeader from './SectionHeader';
import useOnScreen from '../hooks/useOnScreen';
import { PROJECTS, EXPERIENCES } from '../constants';

const StatCard: React.FC<{ value: string; label: string; delay: string }> = ({ value, label, delay }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white/80 dark:bg-panel-bg backdrop-blur-sm p-6 text-center border border-gray-200 dark:border-border-animus transform transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: delay, clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
    >
      <p className="text-4xl lg:text-5xl font-extrabold text-primary font-orbitron drop-shadow-[0_0_5px_rgba(14,165,233,0.8)]">
        {value}
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-text-muted mt-2 font-orbitron">
        {label}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  const [containerRef, isContainerVisible] = useOnScreen({ threshold: 0.1 });

  // --- Dynamic Data Calculation ---
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
    <section id="about" className="py-16 sm:py-24 bg-primary/10 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Database Entry: Profile" />
        <div 
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto"
        >
          {/* Stat Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 transform transition-all duration-700 ease-out ${isContainerVisible ? 'opacity-100' : 'opacity-0'}`}>
            <StatCard value={`${yearsExperience}`} label="Years Active" delay="300ms" />
            <StatCard value={`${projectsDelivered}+`} label="Completed Sequences" delay="450ms" />
          </div>

          {/* Bio Text - Styled as terminal data */}
          <div className={`relative p-8 border-l border-primary/30 bg-gradient-to-r from-primary/5 to-transparent transform transition-all duration-700 ease-out ${isContainerVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary"></div>
            <div className="text-lg text-gray-800 dark:text-text-main leading-relaxed space-y-4 text-left font-plex-mono">
              <p>
                <strong className="text-primary">&gt;</strong> I am Mesuli M Gama and i am a results-driven IT professional with over three years of experience working across technology, administrative systems, and compliance-focused environments. I specialize in translating complex operational and data-driven challenges into efficient, accurate, and well-structured digital solutions.
              </p>
              <p>
                <strong className="text-primary">&gt;</strong> I hold a Diploma in Information Technology and gained hands-on, industry-relevant experience through the CAPACITI programme, where I strengthened my skills in systems support, data management, workflow optimization, and digital process improvement. In addition, I have completed advanced AI bootcamp certifications, enabling me to apply intelligent automation and AI-assisted data validation to improve system accuracy and operational efficiency.
              </p>
              <p>
                <strong className="text-primary">&gt;</strong> I am motivated by opportunities that allow me to integrate technology, data, and people-centered processes to build scalable, modern solutions within forward-thinking organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;