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
      'linear-gradient(135deg, rgb(48, 16, 78) 0%, rgb(58, 20, 93) 50%, rgb(40, 12, 67) 100%)',
      'linear-gradient(135deg, rgb(58, 20, 93) 0%, rgb(40, 12, 67) 50%, rgb(48, 16, 78) 100%)',
      'linear-gradient(135deg, rgb(40, 12, 67) 0%, rgb(48, 16, 78) 50%, rgb(58, 20, 93) 100%)'
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden"
      animate={{ opacity: isMounted ? 1 : 0 }}
      style={{ background: backgroundColor }}
    >
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: 'repeat',
          opacity: 0.2 
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-purple-900/80 to-purple-950"></div>
      </div>
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
    </motion.div>
  );
} 