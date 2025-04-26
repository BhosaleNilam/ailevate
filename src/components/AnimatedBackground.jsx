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
      'linear-gradient(135deg, rgb(15, 35, 55) 0%, rgb(32, 67, 98) 50%, rgb(12, 30, 48) 100%)',
      'linear-gradient(135deg, rgb(20, 44, 65) 0%, rgb(12, 30, 48) 50%, rgb(15, 35, 55) 100%)',
      'linear-gradient(135deg, rgb(12, 30, 48) 0%, rgb(15, 35, 55) 50%, rgb(32, 67, 98) 100%)'
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden"
      animate={{ opacity: isMounted ? 1 : 0 }}
      style={{ background: backgroundColor }}
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: 'repeat',
          opacity: 0.2 
        }}
      />
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute rounded-full bg-teal-700/20 blur-[80px]"
        animate={{
          x: ["-10%", "30%", "-5%"],
          y: ["0%", "25%", "5%"],
          scale: [1, 1.2, 0.9],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: "30vw",
          height: "30vw",
          top: "15%",
          left: "20%",
        }}
      />
      
      <motion.div 
        className="absolute rounded-full bg-blue-700/20 blur-[100px]"
        animate={{
          x: ["20%", "-15%", "10%"],
          y: ["10%", "-15%", "0%"],
          scale: [1, 0.9, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: "40vw",
          height: "40vw",
          top: "60%",
          right: "10%",
        }}
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-900/80 to-slate-950"></div>
      </div>
      
      {/* Stars effect */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', 
        backgroundSize: '40px 40px',
        opacity: 0.3
      }} />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Glow vignette effect around edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50"></div>
      
      <div className="absolute inset-0 backdrop-blur-[80px]"></div>
    </motion.div>
  );
}