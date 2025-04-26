import React, { useEffect, useState } from 'react';
import '../styles/custom.css';

const ParticlesBackground = ({ count = 50, minSize = 2, maxSize = 6, minDuration = 10, maxDuration = 30 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles based on screen size and props
    const generateParticles = () => {
      const particleCount = window.innerWidth < 768 ? Math.floor(count * 0.6) : count;
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Determine particle type randomly
        const particleTypes = ['default', 'circular', 'zigzag', 'pulse'];
        const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          delay: Math.random() * 5,
          duration: minDuration + Math.random() * (maxDuration - minDuration),
          opacity: Math.random() * 0.5 + 0.1,
          type: particleType
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Regenerate particles on window resize
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, [count, minSize, maxSize, minDuration, maxDuration]);

  // Get the CSS class for a particle based on its type
  const getParticleClassName = (type) => {
    switch (type) {
      case 'circular':
        return 'particle particle-circular';
      case 'zigzag':
        return 'particle particle-zigzag';
      case 'pulse':
        return 'particle particle-pulse';
      default:
        return 'particle';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="particles-container">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className={getParticleClassName(particle.type)}
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              opacity: particle.opacity,
              // Randomize colors slightly for more variety
              background: particle.type === 'pulse' 
                ? `radial-gradient(circle, rgba(45, 212, 191, ${particle.opacity + 0.2}), rgba(59, 130, 246, ${particle.opacity}))`
                : `linear-gradient(to right, rgba(45, 212, 191, ${particle.opacity + 0.2}), rgba(59, 130, 246, ${particle.opacity}))`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground; 