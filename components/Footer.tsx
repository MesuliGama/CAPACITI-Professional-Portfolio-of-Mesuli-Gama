import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-6 text-center text-sm dark:from-primary dark:to-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Mesuli Gama. All rights reserved.</p>
        <p className="mt-2">Designed with <span className="text-red-400">&hearts;</span> and built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;