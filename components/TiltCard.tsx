import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    
    // Dynamic Glare Effect
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    
    setStyle({
        '--glare-x': `${glareX}%`,
        '--glare-y': `${glareY}%`,
        '--glare-opacity': '1',
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setStyle({
        '--glare-opacity': '0',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-100 ease-out will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
        {/* Content */}
        <div style={{ transform: 'translateZ(20px)' }}>
            {children}
        </div>

        {/* Holographic Glare Overlay */}
        <div 
            className="absolute inset-0 pointer-events-none rounded-xl z-50 mix-blend-overlay transition-opacity duration-300"
            style={{
                background: `radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`,
                opacity: (style as any)['--glare-opacity'] || 0,
            }}
        />
    </div>
  );
};

export default TiltCard;