import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gridPattern from '../images/grid.svg';

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'linear-gradient(135deg, #1E194E 0%, #342987 50%, #1E194E 100%)',
      'linear-gradient(135deg, #342987 0%, #1E194E 50%, #4A39C0 100%)',
      'linear-gradient(135deg, #1E194E 0%, #4A39C0 50%, #342987 100%)'
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 w-full h-full -z-10"
      animate={{ opacity: isMounted ? 1 : 0 }}
      style={{ background: backgroundColor }}
    >
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: 'repeat',
          opacity: 0.15 
        }}
      />
      <div className="absolute inset-0">
        <div className="floating-dots opacity-30"></div>
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/10 via-purple-700/20 to-purple-900/70"></div>
      </div>
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
    </motion.div>
  );
} 