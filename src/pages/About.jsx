import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    {
      name: 'Our Mission',
      role: 'What drives us',
      description: 'At AiLEVATE, we are on a mission to revolutionize how businesses connect with their customers. We believe in harnessing the power of AI to create meaningful, efficient, and scalable customer relationships.'
    },
    {
      name: 'Our Vision',
      role: 'Where we are headed',
      description: 'We envision a future where every business, regardless of size, has access to enterprise-level AI tools that can help them grow and succeed in an increasingly digital world.'
    },
    {
      name: 'Our Values',
      role: 'What we believe in',
      description: 'Innovation, integrity, and customer success are at the heart of everything we do. We are committed to providing solutions that deliver real, measurable results for our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">About AiLEVATE</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Transforming businesses through intelligent automation and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8 hover:bg-purple-700/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-purple-300 font-medium mb-4">{member.role}</p>
              <p className="text-purple-100">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-purple-800/20 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">20k+</div>
              <p className="text-purple-100">Appointments Booked</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <p className="text-purple-100">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">500+</div>
              <p className="text-purple-100">Businesses Helped</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 