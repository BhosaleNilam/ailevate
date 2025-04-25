import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const features = [
    'Up to 14 day free trial',
    'No hidden fees',
    'Boost Client ROI',
    'Scale Your Agency Faster',
  ];

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-light to-dark opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/grid.svg')] opacity-5"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-block"
            >
              <div className="bg-light/40 backdrop-blur-sm px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-primary" />
                <span className="text-sm text-white">20,000+ BOOKED APPOINTMENTS USING AiLEVATE</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
                The <span className="text-primary">#1</span> Ai setter that turns leads into{' '}
                <span className="text-primary">appointments</span>
              </h1>
              <p className="text-xl text-gray-custom mb-8 max-w-3xl mx-auto">
                Trusted by the biggest agencies in the world to easily convert leads into closed deals for their clients
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  to="/get-started" 
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-semibold rounded-lg hover:bg-mint-dark transition-all duration-200 text-center"
                >
                  Build my FREE Ai Bot
                </Link>
                <span className="text-sm text-gray-custom">14 days free, then plans start at $97 / month</span>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-custom"
                >
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Engage with leads in seconds
              </h2>
              <p className="text-gray-custom mb-8">
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
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-custom">{item}</span>
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
              <div className="bg-light rounded-2xl p-6 border border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0"></div>
                    <div className="bg-gray-800 rounded-lg p-3 text-sm text-white max-w-xs">
                      Hi! I noticed you filled out our form. How familiar are you with AI automation?
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 text-sm text-primary max-w-xs">
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
      <div className="relative py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-custom mb-12">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {['ESTATE AI', 'Affluent', 'propmedia'].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white text-xl font-bold"
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