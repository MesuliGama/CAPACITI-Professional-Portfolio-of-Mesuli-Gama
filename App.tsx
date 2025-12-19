import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CareerObjectiveSection from './components/CareerObjectiveSection'; // Import the new Career Objective section
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import LicensesCertificationsSection from './components/LicensesCertificationsSection'; 
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ATSSection from './components/ATSSection'; // Import the new ATS section
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AIConversationAssistant from './components/AIConversationAssistant'; // Import AI assistant
import FloatingChatButton from './components/FloatingChatButton'; // Import FloatingChatButton
import Starfield from './components/Starfield'; // Import 3D Starfield
import { useActiveSection } from './hooks/useActiveSection';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [showLandingPage, setShowLandingPage] = useState<boolean>(true);
  const [showAiAssistant, setShowAiAssistant] = useState<boolean>(false); // New state for AI assistant

  // Active section tracking for navbar highlighting
  const sectionIds = NAV_LINKS.map(link => link.hash.substring(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    // Apply or remove 'dark' class to the html element based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleEnterPortfolio = () => {
    setShowLandingPage(false);
  };

  const toggleAiAssistant = () => {
    setShowAiAssistant(prev => !prev);
  };

  if (showLandingPage) {
    return <LandingPage onEnterPortfolio={handleEnterPortfolio} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 3D Global Background */}
      <Starfield />

      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
      />
      <div className="relative z-10">
        <main className="flex-grow">
          <Hero />
          <About />
          <CareerObjectiveSection />
          <ExperienceSection />
          <EducationSection />
          <LicensesCertificationsSection />
          <SkillsSection />
          <ProjectsSection />
          <ATSSection />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating Chat Button */}
      <FloatingChatButton onClick={toggleAiAssistant} ariaLabel="Open AI Assistant" />

      {/* AI Conversation Assistant Overlay */}
      {showAiAssistant && <AIConversationAssistant onClose={toggleAiAssistant} />}
    </div>
  );
};

export default App;