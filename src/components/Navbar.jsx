import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path, sectionId) => {
    if (path === '/' && !sectionId) {
      // If clicking Home, scroll to top of home page
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (sectionId) {
      if (location.pathname !== '/') {
        // If we're not on home page, navigate there first
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        // If we're already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
  };

  const isLinkActive = (path, sectionId) => {
    if (sectionId) {
      // For sections like Services, don't show as active
      return false;
    }
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/', label: 'Services', sectionId: 'process' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-slate-900/20' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('/', null)} 
            className="flex items-center z-50 cursor-pointer"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h1 className="text-3xl font-bold text-gradient-primary">
                AILevate
              </h1>
              <motion.div
                className="absolute -inset-x-6 -inset-y-4 bg-white/[0.05] rounded-xl -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path + link.label}
                className="relative group cursor-pointer"
                onClick={() => handleNavClick(link.path, link.sectionId)}
              >
                <motion.span
                  className={`text-base font-medium transition-colors duration-200 ${
                    isLinkActive(link.path, link.sectionId)
                      ? 'text-white'
                      : 'text-slate-300 group-hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.span>
                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5 -bottom-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
                  initial={{ width: "0%", opacity: 0 }}
                  animate={{
                    width: isLinkActive(link.path, link.sectionId) ? "100%" : "0%",
                    opacity: isLinkActive(link.path, link.sectionId) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover underline */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5 -bottom-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          {/* <Link to="/contact" className="hidden lg:block">
            <motion.button
              className="btn-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(45, 212, 191, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </Link> */}

          {/* Mobile Menu Button */}
          {/* <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.span
                className="absolute w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -4
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-white rounded-full"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 4
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 pt-24 pb-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-semibold ${
                        location.pathname === link.path
                          ? 'text-gradient-primary'
                          : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {/* <Link to="/contact" className="block">
                    <motion.button
                      className="btn-primary w-full justify-center mt-4"
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </Link> */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 