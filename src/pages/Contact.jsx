import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/custom.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="floating-dots"></div>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 neon-text">Get in Touch</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto gradient-text">
            Ready to transform your business with AI? We're here to help you get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="gradient-border p-4"
              >
                <h3 className="text-purple-300 font-medium mb-2">Email</h3>
                <p className="text-white">contact@ailevate.ca</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="gradient-border p-4"
              >
                <h3 className="text-purple-300 font-medium mb-2">Phone</h3>
                <p className="text-white">+1 (555) 123-4567</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="gradient-border p-4"
              >
                <h3 className="text-purple-300 font-medium mb-2">Office</h3>
                <p className="text-white">123 AI Street<br />Tech Valley, CA 94025</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-purple-200 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="custom-input w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="custom-input w-full"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-purple-200 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="custom-input w-full"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="custom-input w-full"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-glow w-full relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-pulse mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 