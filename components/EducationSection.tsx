import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard'; // Corrected import path
// Corrected: Import EDUCATION from constants
import { EDUCATION } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const SchoolIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 7l11 5 11-5-11-5zm0 13.6L1 10.1l11 5 11-5-11-5zm0 4L1 14.1l11 5 11-5-11-5z"/></svg>
);

const EducationSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <section id="education" className="py-16 sm:py-24 bg-primary/5 dark:bg-dark-bg/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education" />
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 lg:gap-x-24"
        >
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/50 dark:bg-secondary/50 transform -translate-x-1/2 shadow-lg shadow-secondary/50"></div>
          
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col transform transition-all duration-700 ${index % 2 === 0 ? 'md:col-start-1 md:items-end text-right' : 'md:col-start-2 items-start text-left'}
                         ${isVisible ? 'translate-y-0 opacity-100 animate-slide-up' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              aria-hidden={!isVisible}
            >
              <ExperienceCard
                title={edu.degree}
                subtitle={edu.institution}
                location={edu.location}
                duration={edu.duration}
                description={edu.details}
                icon={<SchoolIcon />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;