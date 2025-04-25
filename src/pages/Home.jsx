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

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">Skyrocket Your Business</span> with AI-Powered Leads, Reviews & Bookings – On Autopilot!
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Struggling with missed calls, low reviews, and lost leads? Our AI-Powered Growth System fixes this instantly—turning calls into customers, automating 5-star reviews, and building your customer database for repeat sales.
              </motion.p>

              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent" />
                  <span className="text-gray-300">More reviews → Higher ranking → More customers.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent" />
                  <span className="text-gray-300">More follow-ups → More booked appointments.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-accent" />
                  <span className="text-gray-300">Pay $0 Until You See Results – No Risk, Just Growth.</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <Link 
                  to="/get-started" 
                  className="btn-glow inline-block"
                >
                  Try It FREE – Only Pay When You See Results!
                </Link>
                <p className="text-sm text-purple-300">Only 10 Free AI Setups Available This Month – Act Fast!</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="gradient-border p-2 rounded-lg">
                <img 
                  src={homepageImage} 
                  alt="AiLEVATE Agency Whiteboard" 
                  className="rounded-lg shadow-2xl w-full max-w-2xl mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chat Demo Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Engage with leads</span> in seconds
              </h2>
              <p className="text-gray-300 mb-8">
                Our AI-powered system automatically engages with your leads, qualifies them, and books appointments instantly.
              </p>
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center">
                      <CheckCircleIcon className="h-4 w-4 text-teal-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
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
              <div className="glass-card p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex-shrink-0"></div>
                    <div className="bg-purple-700/30 rounded-lg p-3 text-sm text-white max-w-xs">
                      Hi! I noticed you filled out our form. How familiar are you with AI automation?
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-teal-400/10 rounded-lg p-3 text-sm text-teal-100 max-w-xs">
                      I'm interested in learning more about it. Can you tell me how it works?
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative py-20 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-12">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {['ESTATE AI', 'Affluent', 'propmedia'].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-300 text-xl font-bold"
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