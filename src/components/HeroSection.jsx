import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-sky-600/10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Transform Your Business with </span>
                <span className="text-sky-400">
                  AI Solutions
                </span>
              </h1>
              
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl">
                Leverage cutting-edge artificial intelligence to streamline operations, 
                enhance customer experiences, and drive innovation for your business.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-8 py-3.5 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 shadow-lg shadow-sky-500/20 transition-all"
                  >
                    Get Started
                    <FiArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/services" 
                    className="inline-flex items-center px-8 py-3.5 rounded-lg border border-sky-500/30 text-sky-400 font-medium hover:bg-sky-500/10 transition-all"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <p className="text-sm text-slate-400 mb-3">Trusted by innovative companies</p>
                <div className="flex flex-wrap gap-8 items-center opacity-60">
                  {/* Replace with actual partner logos */}
                  <div className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-slate-300 font-semibold">ACME Corp</span>
                  </div>
                  <div className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-slate-300 font-semibold">TechFlow</span>
                  </div>
                  <div className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-slate-300 font-semibold">InnovateCo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 shadow-2xl backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-sky-500"></div>
                <img 
                  src="/images/ai-dashboard.webp" 
                  alt="AI Dashboard Interface" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x600/1e293b/38bdf8?text=AI+Dashboard';
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-600/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-500/30 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 