import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import homepageImage from '../images/homepage_image.webp';

export default function Home() {
  const features = [
    'Up to 14 day free trial',
    'No hidden fees',
    'Boost Client ROI',
    'Scale Your Agency Faster',
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 120
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-950/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/grid.svg')] opacity-5"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-dots opacity-30"></div>
          
          {/* Animated circles - contained within viewport */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-purple-800/10 rounded-full blur-3xl animate-ping animate-slow"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Skyrocket</span> Your{' '}
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Business</span> with{' '}
                <span className="text-gradient inline-block transform hover:scale-105 transition-transform duration-300">AI-Powered</span> Leads, Reviews & Bookings – On Autopilot!
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                variants={itemVariants}
              >
                Struggling with missed calls, low reviews, and lost leads? Our AI-Powered Growth System fixes this instantly—turning calls into customers, automating 5-star reviews, and building your customer database for repeat sales.
              </motion.p>

              <motion.div 
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {['More reviews → Higher ranking → More customers.', 
                  'More follow-ups → More booked appointments.', 
                  'Pay $0 Until You See Results – No Risk, Just Growth.'].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircleIcon className="h-6 w-6 text-primary animate-pulse" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to="/get-started" 
                    className="inline-block nav-button bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                  >
                    Try It FREE – Only Pay When You See Results!
                  </Link>
                </motion.div>
                <motion.p 
                  className="text-sm text-purple-300 animate-pulse"
                  variants={itemVariants}
                >
                  Only 10 Free AI Setups Available This Month – Act Fast!
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              variants={imageVariants}
              whileHover="hover"
            >
              {/* Animated image container with effects */}
              <div className="relative mx-auto max-w-lg">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-purple-300/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Gradient border */}
                <div className="gradient-border p-2 rounded-lg relative z-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  <img 
                    src={homepageImage} 
                    alt="AiLEVATE Agency Whiteboard" 
                    className="rounded-lg w-full max-w-full mx-auto relative z-20 transform transition-all duration-500"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-400 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 p-2 sm:p-3 bg-purple-900/80 backdrop-blur-sm rounded-lg shadow-xl z-30"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="text-xs font-bold text-purple-300">AI-POWERED</div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 p-2 sm:p-3 bg-purple-800/80 backdrop-blur-sm rounded-lg shadow-xl z-30"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0] 
                  }}
                  transition={{
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  <div className="text-xs font-bold text-purple-300">GROWTH SYSTEM</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Chat Demo Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-gradient">Engage with leads</span> in seconds
              </motion.h2>
              <motion.p 
                className="text-purple-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our AI-powered system automatically engages with your leads, qualifies them, and books appointments instantly.
              </motion.p>
              <div className="space-y-4">
                {[
                  'Instant lead engagement',
                  'Smart qualification process',
                  'Automated appointment booking',
                  'Real-time chat analytics'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <CheckCircleIcon className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-purple-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Chat Demo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-purple-800/30 rounded-2xl p-6 border border-purple-700 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-purple-600/20 flex-shrink-0"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="bg-purple-900/50 rounded-lg p-3 text-sm text-white max-w-xs"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Hi! I noticed you filled out our form. How familiar are you with AI automation?
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3 justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <motion.div 
                      className="bg-purple-600/10 rounded-lg p-3 text-sm text-purple-300 max-w-xs"
                      animate={{ x: [0, -2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      I'm interested in learning more about it. Can you tell me how it works?
                    </motion.div>
                  </motion.div>
                  
                  {/* Typing indicator */}
                  <motion.div 
                    className="flex items-start space-x-3 opacity-70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-600/20 flex-shrink-0"></div>
                    <div className="bg-purple-900/30 rounded-lg px-4 py-3 flex space-x-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative py-20 border-t border-purple-800">
        <div className="container mx-auto px-4">
          <motion.p 
            className="text-center text-purple-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by leading companies worldwide
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {['ESTATE AI', 'Affluent', 'propmedia'].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-purple-200 text-xl font-bold hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 