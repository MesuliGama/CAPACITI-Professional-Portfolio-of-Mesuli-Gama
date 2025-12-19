import React from 'react';

interface FloatingChatButtonProps {
  onClick: () => void;
  ariaLabel: string;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-secondary text-white shadow-xl
                 hover:bg-primary transition-all duration-300 transform hover:scale-110
                 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900
                 animate-float"
    >
      {/* Robot Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a2 2 0 0 1 2 2v2h-4V4a2 2 0 0 1 2-2z" />
        <path fillRule="evenodd" d="M18 8H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    </button>
  );
};

export default FloatingChatButton;