
import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const ProjectsSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.1 });

  // Sort projects so that Featured/Capstone projects appear first
  const sortedProjects = [...PROJECTS].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-primary/10 dark:bg-dark-bg/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Memory Sequences: Projects" />
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 animate-slide-up' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              aria-hidden={!isVisible}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
