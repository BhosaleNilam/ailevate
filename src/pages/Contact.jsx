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
    role: '',
    companyName: '',
    website: '',
    phone: '',
    companySize: '',
    annualRevenue: '',
    projectBudget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          role: '',
          companyName: '',
          website: '',
          phone: '',
          companySize: '',
          annualRevenue: '',
          projectBudget: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full border border-teal-500/30 bg-teal-900/20"
            >
              <span className="text-sm font-medium tracking-wide text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                LET'S GET TO KNOW YOU
              </span>
            </motion.div>
            
            <AnimatedHeading
              tag="h1"
              text="Speak to an expert and start a plan for your project"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              animation="highlightIn"
              wordHighlight={[3]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>

                  {/* Role Field */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role within Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="e.g. CTO, Project Manager, etc."
                      required
                    />
                  </div>

                  {/* Company Name Field */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  {/* Website Field */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      placeholder="+1 (555) 555-5555"
                    />
                  </div>

                  {/* Company Size Field */}
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  {/* Annual Revenue Field */}
                  <div>
                    <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-300 mb-2">
                      Annual Revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="annualRevenue"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      required
                    >
                      <option value="">Select annual revenue</option>
                      <option value="<1M">Less than $1M</option>
                      <option value="1M-5M">$1M - $5M</option>
                      <option value="5M-20M">$5M - $20M</option>
                      <option value="20M-50M">$20M - $50M</option>
                      <option value="50M+">$50M+</option>
                    </select>
                  </div>

                  {/* Project Budget Field */}
                  <div>
                    <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                      required
                    >
                      <option value="">Select project budget</option>
                      <option value="<50K">Less than $50K</option>
                      <option value="50K-100K">$50K - $100K</option>
                      <option value="100K-500K">$100K - $500K</option>
                      <option value="500K+">$500K+</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    How Can We Help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white"
                    placeholder="Please describe your project needs and how we can assist you"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 