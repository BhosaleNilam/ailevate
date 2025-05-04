import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/custom.css';
import AnimatedHeading from '../components/AnimatedHeading';

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

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-6 py-2 mb-4 rounded-full border border-teal-500/30 bg-gradient-to-r from-teal-900/30 to-blue-900/30 backdrop-blur-sm"
            >
              <span className="text-lg font-medium tracking-wide text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                AILevate Form
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
          
          {/* Form Section */}
          <motion.div 
            className="bg-slate-900/50 p-8 md:p-10 rounded-2xl relative overflow-hidden border border-slate-800/50 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Form top gradient border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
            
            {/* Success Message */}
            {isSuccess && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/90 flex flex-col items-center justify-center p-8 z-10 rounded-xl"
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
                  className="text-2xl font-bold mb-2 text-white"
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
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                {/* Role Field */}
                <div className="group">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Your Role within Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="e.g. CTO, Project Manager, etc."
                    required
                  />
                </div>

                {/* Company Name Field */}
                <div className="group">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="Your company name"
                    required
                  />
                </div>

                {/* Website Field */}
                <div className="group">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
                    placeholder="+1 (555) 555-5555"
                  />
                </div>

                {/* Company Size Field */}
                <div className="group">
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Company Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
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
                <div className="group">
                  <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Annual Revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="annualRevenue"
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
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
                <div className="group">
                  <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                    Project Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70"
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

              {/* Message Field with enhanced styling */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-teal-400">
                  How Can We Help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 text-white transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70 resize-none"
                  placeholder="Please describe your project needs and how we can assist you"
                  required
                />
              </div>

              {/* Submit Button with enhanced styling */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-4 px-6 rounded-lg text-base font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Submit
                    <svg className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 