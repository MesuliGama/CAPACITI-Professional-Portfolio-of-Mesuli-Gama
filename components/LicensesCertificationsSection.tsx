import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';
// Corrected: Import LICENSES_CERTIFICATIONS from constants
import { LICENSES_CERTIFICATIONS } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const CertificateIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM5 20V4h14l.002 16H5z"/><path d="M7 9h10v2H7zm0 4h10v2H7z"/></svg>
);

const LicensesCertificationsSection: React.FC = () => {
  const [containerRef, isVisible] = useOnScreen({ threshold: 0.15 }); // Trigger when 15% of the container is visible

  return (
    <section id="licenses-certifications" className="py-16 sm:py-24 bg-primary/5 dark:bg-dark-bg/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Licenses & Certifications" />
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 lg:gap-x-24 timeline"
        >
          {LICENSES_CERTIFICATIONS.map((cert, index) => {
            const descriptionItems: string[] = [];
            if (cert.skills && cert.skills.length > 0) {
              descriptionItems.push(`Skills: ${cert.skills.join(' · ')}`);
            }
            if (cert.credentialId) {
              descriptionItems.push(`Credential ID: ${cert.credentialId}`);
            }
            // Removed: if (cert.credentialLink) {
            // Removed:     descriptionItems.push(`Show credential: ${cert.credentialLink}`);
            // Removed: }
            // Removed: if (cert.notes) {
            // Removed:     descriptionItems.push(cert.notes);
            // Removed: }

            return (
              <React.Fragment key={cert.id}>
                <div
                  className={`flex flex-col transform transition-all duration-700 ${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}
                             ${isVisible ? 'translate-y-0 opacity-100 animate-slide-up' : 'translate-y-8 opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }} // Apply sequential delay for each card
                  aria-hidden={!isVisible} // Hide from screen readers if not visible
                >
                  <ExperienceCard
                    title={cert.title}
                    subtitle={cert.issuer}
                    location={''} // Not directly applicable for most certifications
                    duration={cert.issuedDate}
                    description={descriptionItems.length > 0 ? descriptionItems : undefined}
                    icon={<CertificateIcon />}
                  />
                </div>
              </React.Fragment>
            );
          })}
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/50 dark:bg-secondary/50 transform -translate-x-1/2 shadow-lg shadow-secondary/50"></div>
        </div>
      </div>
    </section>
  );
};

export default LicensesCertificationsSection;