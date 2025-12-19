import React from 'react';
import TiltCard from './TiltCard';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  description?: string[]; // Optional for education
  icon?: React.ReactNode; // Optional icon for the card
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  location,
  duration,
  description,
  icon,
}) => {
  return (
    <TiltCard>
        <div className="relative p-6 bg-white/90 dark:bg-panel-bg backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-border-military hover:border-secondary/50 transition-all duration-300 group">
        <div className="flex items-start mb-4">
            {icon && (
            <div className="flex-shrink-0 mr-4 text-secondary group-hover:text-primary dark:group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_5px_theme(colors.secondary)]">
                {icon}
            </div>
            )}
            <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-text-main group-hover:text-secondary transition-colors duration-300 font-orbitron tracking-wide">
                {title}
            </h3>
            <p className="text-md text-gray-700 dark:text-text-muted font-plex-mono">
                {subtitle} | {location}
            </p>
            <p className="text-sm text-gray-500 dark:text-text-muted/70 font-plex-mono">
                {duration}
            </p>
            </div>
        </div>
        {description && description.length > 0 && (
            <ul className="list-disc pl-5 text-gray-600 dark:text-text-muted space-y-2 text-sm font-light">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )}
        </div>
    </TiltCard>
  );
};

export default ExperienceCard;