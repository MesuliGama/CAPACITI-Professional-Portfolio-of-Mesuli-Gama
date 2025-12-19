import React from 'react';
import SectionHeader from './SectionHeader';
import useOnScreen from '../hooks/useOnScreen';

const CareerObjectiveSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="objective" className="py-16 sm:py-24 bg-primary/10 dark:bg-dark-bg/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Career Objective" />
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-plex-mono italic p-6 border border-secondary/20 rounded-lg bg-white/5 dark:bg-primary/10 shadow-lg flex flex-col gap-4">
            <p>
              A results-oriented professional with a strong multidisciplinary background spanning IT network engineering, administrative systems, and enterprise data platforms. Having recently completed advanced AI training, I aim to leverage this combined expertise to design and implement intelligent, automated solutions that improve accuracy, efficiency, and system reliability.
            </p>
            <p>
              I am passionate about integrating technology, compliance-driven processes, and people-focused workflows to strengthen operational performance, enhance data integrity, and enable informed decision-making within forward-thinking technology or public-sector environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerObjectiveSection;