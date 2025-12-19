import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Animus Particles
    const stars: { x: number; y: number; z: number; o: number }[] = [];
    const STAR_COUNT = 600;
    const SPEED = 1.5; // Slightly slower, more floating
    const MOUSE_SENSITIVITY = 0.0002;

    let mouseX = 0;
    let mouseY = 0;

    // Initialize stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        o: Math.random(), 
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * MOUSE_SENSITIVITY;
      mouseY = (e.clientY - height / 2) * MOUSE_SENSITIVITY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      // Clear with slight fade for trail effect? No, clean clear for Animus.
      ctx.clearRect(0, 0, width, height); 
      // Background handled by CSS to allow gradient

      ctx.lineWidth = 0.5;

      stars.forEach((star, i) => {
        star.z -= SPEED;

        star.x -= mouseX * star.z * 0.1;
        star.y -= mouseY * star.z * 0.1;

        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / width) * 2; // Smaller, sharper particles
          const opacity = (1 - star.z / width);
          
          ctx.beginPath();
          // Animus Blue/White color scheme
          // Randomly switch between pure white and animus blue for depth
          const isBlue = i % 3 === 0;
          const r = isBlue ? 14 : 248;
          const g = isBlue ? 165 : 250;
          const b = isBlue ? 233 : 252;
          
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
          
          // Draw geometric squares/rectangles instead of circles for "digital" feel
          ctx.rect(px, py, size, size);
          ctx.fill();
          
          // Occasional connecting lines for "Network" feel
          if (size > 1.5 && i < stars.length - 1) {
             const nextStar = stars[i+1];
             const k2 = 128.0 / nextStar.z;
             const px2 = nextStar.x * k2 + width / 2;
             const py2 = nextStar.y * k2 + height / 2;
             
             // Only connect if close
             const dist = Math.hypot(px - px2, py - py2);
             if (dist < 50) {
                 ctx.beginPath();
                 ctx.strokeStyle = `rgba(${14}, ${165}, ${233}, ${opacity * 0.2})`;
                 ctx.moveTo(px, py);
                 ctx.lineTo(px2, py2);
                 ctx.stroke();
             }
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Starfield;