import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';
// Corrected: Import EXPERIENCES from constants
import { EXPERIENCES } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const WorkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-12-2h8v2H8V4zm-4 4h16v3H4V8zm0 5h16v6H4v-6z"/></svg>
);

const ExperienceSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.15 }); // Trigger when 15% of the container is visible

  return (
    <section id="experience" className="py-16 sm:py-24 bg-primary/10 dark:bg-dark-bg/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Professional Experience" />
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col items-center gap-10"
        >
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`w-full max-w-2xl transform transition-all duration-700
                         ${isVisible ? 'translate-y-0 opacity-100 animate-slide-up' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              aria-hidden={!isVisible}
            >
              <ExperienceCard
                title={exp.title}
                subtitle={exp.company}
                location={exp.location}
                duration={exp.duration}
                description={exp.description}
                icon={<WorkIcon />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;