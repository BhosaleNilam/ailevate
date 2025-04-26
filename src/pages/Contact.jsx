import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/custom.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData, 'Subscribed:', isSubscribed);
    setIsSubmitting(false);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubscribed(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-20 pb-24" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/bg-pattern.png)', backgroundSize: 'cover' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full border border-purple-500/30 bg-purple-900/20"
            >
              <span className="text-sm font-medium tracking-wide text-center gradient-text">CUSTOMERS FEEDBACK</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Early Customers Feedback
            </motion.h1>
            
            <motion.div 
              className="space-y-4 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 text-xl mt-0.5">✧</span>
                <p>Hassle-Free Support: Link with our crew anytime</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 text-xl mt-0.5">✧</span>
                <p>Schedule a Demo Now: Witness our platform's performance</p>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Cards and Form Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Contact Cards Side */}
            <div className="xl:col-span-5 space-y-6">
            
              {/* Email Contact Card */}
              <motion.div 
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reach Out to Us</h3>
                    <p className="text-gray-400 mb-4">Have questions? We're here to help reach out!</p>
                    <a href="mailto:landerx@email.com" className="text-purple-400 hover:text-purple-300 transition-colors">landerx@email.com</a>
                  </div>
                </div>
              </motion.div>
              
              {/* Phone Contact Card */}
              <motion.div 
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reach Out to Us</h3>
                    <p className="text-gray-400 mb-4">Need assistance? Ring us up—we're at your service.</p>
                    <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 transition-colors">+1234567890</a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Form Side */}
            <motion.div 
              className="xl:col-span-7 glass-card p-8 rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/20 via-purple-400/40 to-purple-600/20"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="custom-input w-full bg-black/30 border-gray-700 focus:border-purple-500"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input w-full bg-black/30 border-gray-700 focus:border-purple-500"
                    placeholder="jane@framer.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject of Interest</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="custom-input w-full bg-black/30 border-gray-700 focus:border-purple-500"
                    placeholder="Product related"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="custom-input w-full bg-black/30 border-gray-700 focus:border-purple-500"
                    placeholder="message goes here..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={isSubscribed}
                    onChange={() => setIsSubscribed(!isSubscribed)}
                    className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="subscribe" className="ml-2 text-sm text-gray-300">
                    Subscribe to Newsletter
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg w-full transition-all duration-300 flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(90deg, #4A36B1, #6247D0)',
                    boxShadow: '0px 4px 12px rgba(98, 71, 208, 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="loading-pulse mr-2"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 