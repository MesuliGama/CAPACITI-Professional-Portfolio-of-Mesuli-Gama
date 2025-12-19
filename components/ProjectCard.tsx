
import React from 'react';
import { Project } from '../types';
import TiltCard from './TiltCard';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <TiltCard className="h-full">
        <div className={`flex flex-col h-full bg-white/90 dark:bg-panel-bg backdrop-blur-md shadow-lg 
                        transition-all duration-500 ease-out group overflow-hidden border relative
                        ${project.isFeatured 
                            ? 'border-secondary/50 shadow-[0_0_25px_rgba(249,115,22,0.15)] ring-1 ring-secondary/30' 
                            : 'border-gray-200 dark:border-border-animus'}`}>
        
        {/* Capstone HUD Corner Markers */}
        {project.isFeatured && (
            <>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary z-30"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary z-30"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary z-30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary z-30"></div>
                {/* Subtle Scanline for Featured */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent h-1/2 w-full animate-scanline opacity-20 pointer-events-none"></div>
            </>
        )}

        {/* Header Decorator - Sequence ID */}
        <div className={`h-1 w-full ${project.isFeatured ? 'bg-secondary' : 'bg-gradient-to-r from-transparent via-primary/50 to-transparent'}`}></div>
        
        {/* Capstone Badge */}
        {project.isFeatured && (
            <div className="absolute top-0 right-0 bg-secondary text-dark-bg text-[9px] font-bold px-3 py-1 z-40 font-orbitron tracking-tighter" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'}}>
                CAPSTONE_CORE
            </div>
        )}

        <div className="p-6 flex-grow relative z-10">
            <h3 className={`text-xl font-bold mb-3 font-orbitron transition-colors duration-300 tracking-wide flex items-center
                        ${project.isFeatured ? 'text-secondary' : 'text-gray-900 dark:text-white group-hover:text-primary'}`}>
            {project.title}
            <span className={`ml-auto text-[10px] font-plex-mono border px-1 ${project.isFeatured ? 'text-secondary border-secondary/30' : 'text-primary border-primary/30'}`}>
              SEQ_{String(index + 1).padStart(2, '0')}
            </span>
            </h3>
            <p className="text-gray-600 dark:text-text-muted mb-4 text-sm leading-relaxed font-plex-mono border-l-2 border-primary/20 pl-3">
            {project.description}
            </p>
        </div>
        
        <div className="p-6 pt-0 relative z-10">
            <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
                <span key={index} className="bg-primary/10 text-primary font-bold font-plex-mono text-[10px] uppercase py-1 px-2 border border-primary/20">
                {tech}
                </span>
            ))}
            </div>
            
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-white/5 group-hover:border-primary/30 transition-colors duration-300">
            {project.repoLink && (
                <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-dark-bg/40 text-gray-600 dark:text-text-muted hover:text-primary border border-transparent hover:border-primary transition-all duration-300 text-xs font-bold font-orbitron group/link"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>VIEW_SOURCE</span>
                </a>
            )}
            {project.liveLink && (
                <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 transition-all duration-300 text-xs font-bold font-orbitron border
                          ${project.isFeatured 
                            ? 'bg-secondary text-dark-bg border-secondary hover:bg-white' 
                            : 'bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/30'}`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"/></svg>
                <span>RUN_PROGRAM</span>
                </a>
            )}
            </div>
        </div>
        </div>
    </TiltCard>
  );
};

export default ProjectCard;
