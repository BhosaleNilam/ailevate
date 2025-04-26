import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/custom.css';
import AnimatedHeading from '../components/AnimatedHeading';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
    hover: { 
      y: -5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-4 rounded-full border border-teal-500/30 bg-teal-900/20"
            >
              <span className="text-sm font-medium tracking-wide text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">GET IN TOUCH</span>
            </motion.div>
            
            <AnimatedHeading
              tag="h1"
              text="Let's Start a Conversation"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              animation="highlightIn"
              wordHighlight={[3]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <motion.div 
              className="space-y-4 text-lg text-gray-300"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-3">
                <span className="text-teal-400 text-xl mt-0.5">✦</span>
                <p>Hassle-Free Support: Connect with our team anytime</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-400 text-xl mt-0.5">✦</span>
                <p>Schedule a Demo: Experience our AI solutions firsthand</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Cards and Form Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Contact Cards Side */}
            <div className="xl:col-span-5 space-y-6">
              {/* Email Contact Card */}
              <motion.div 
                className="bg-slate-900/50 p-6 rounded-xl overflow-hidden border border-slate-800"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-teal-900/50 flex items-center justify-center">
                      <EnvelopeIcon className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reach Out to Us</h3>
                    <p className="text-gray-400 mb-4">Have questions? We're here to help!</p>
                    <a href="mailto:contact@ailevate.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      contact@ailevate.com
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Phone Contact Card */}
              <motion.div 
                className="bg-slate-900/50 p-6 rounded-xl overflow-hidden border border-slate-800"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                whileHover="hover"
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-teal-900/50 flex items-center justify-center">
                      <PhoneIcon className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
                    <p className="text-gray-400 mb-4">Need assistance? Ring us up—we're at your service.</p>
                    <a href="tel:+1234567890" className="text-teal-400 hover:text-teal-300 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Office Location Card */}
              <motion.div 
                className="bg-slate-900/50 p-6 rounded-xl overflow-hidden border border-slate-800"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                whileHover="hover"
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-teal-900/50 flex items-center justify-center">
                      <MapPinIcon className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                    <p className="text-gray-400 mb-4">Come see us for an in-person consultation.</p>
                    <p className="text-teal-400">123 AI Boulevard, Tech Valley, CA 94103</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Hours Card */}
              <motion.div 
                className="bg-slate-900/50 p-6 rounded-xl overflow-hidden border border-slate-800"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                whileHover="hover"
              >
                <div className="flex">
                  <div className="mr-5">
                    <div className="w-12 h-12 rounded-lg bg-teal-900/50 flex items-center justify-center">
                      <ClockIcon className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-400 mb-4">We're available to assist you:</p>
                    <div className="space-y-1">
                      <p className="text-teal-400">Monday-Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-teal-400">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Form Side */}
            <motion.div 
              className="xl:col-span-7 bg-slate-900/50 p-8 rounded-xl relative overflow-hidden border border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 via-teal-400/40 to-blue-500/20"></div>
              
              {/* Success Message */}
              {isSuccess && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/90 flex flex-col items-center justify-center p-8 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p 
                    className="text-center text-gray-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Thank you for reaching out. We'll get back to you shortly.
                  </motion.p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                    placeholder="jane@example.com"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                    placeholder="AI Consulting Services"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                    placeholder="Tell us about your project or question..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="w-4 h-4 rounded border-gray-600 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="subscribe" className="ml-2 text-sm text-gray-300">
                    Subscribe to our newsletter for AI industry insights
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg w-full transition-all duration-300 flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      <span>Sending...</span>
                    </div>
                  ) : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 