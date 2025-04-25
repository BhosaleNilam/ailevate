import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/custom.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1 
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const logoVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -5
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotate: -2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* This div prevents any gap/line from appearing when scrolling */}
      <div className="fixed top-0 left-0 w-full h-24 bg-transparent z-40 navbar-bg-fixer"></div>
      
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-purple-900/80 backdrop-blur-xl shadow-purple-900/30' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={logoVariants}
                className="flex items-center"
              >
                <span className="text-3xl font-bold gradient-text">AiLEVATE</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              variants={navVariants}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    to={link.path}
                    className="relative text-lg font-medium transition-colors duration-200 overflow-hidden group px-2 py-1"
                  >
                    <span className={`relative z-10 ${
                      isActive(link.path)
                        ? 'text-white font-semibold neon-text'
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive(link.path) ? (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-500/0 to-purple-600/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/get-started"
                  className="nav-button bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none relative z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={linkVariants}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-y-auto max-h-[70vh] glass-card my-4 rounded-lg border border-purple-500/20 hide-scrollbar"
              >
                <div className="p-4 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 text-lg rounded-md transition-all duration-200 ${
                          isActive(link.path)
                            ? 'gradient-text font-semibold bg-purple-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-purple-500/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    <Link
                      to="/get-started"
                      onClick={() => setIsOpen(false)}
                      className="block nav-button bg-purple-600 hover:bg-purple-500 text-white py-3 px-4 rounded-lg font-medium text-center transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
} 