import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/what-we-offer', label: 'What We Offer' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-slate-900/95 backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1 
              className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AILevate
            </motion.h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <motion.span
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.span>
                {/* Animated underline */}
                <motion.div
                  className={`absolute left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 -bottom-1 ${
                    location.pathname === link.path ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={false}
                  animate={{
                    width: location.pathname === link.path ? '100%' : '0%',
                    opacity: location.pathname === link.path ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <motion.button
              className="hidden md:block px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-teal-500/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(45, 212, 191, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (can be expanded later) */}
      <div className="md:hidden">
        {/* Add mobile menu implementation here */}
      </div>
    </motion.nav>
  );
};

export default Navbar; 