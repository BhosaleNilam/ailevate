import React from 'react';
import { motion } from 'framer-motion';
import '../components/Pricing.css';
import WhatWeOffer from './WhatWeOffer.jsx';

const Pricing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="main-headline">
            Built for Operators. Priced for Outcomes.
          </h1>
          <motion.p 
            className="subheadline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At Ailevate, you're not buying tasks. You're investing in systems that compound over time. 
            Whether you need clarity before committing or want a dedicated automation partner to build and scale with, 
            we've got the right option.
          </motion.p>
          <motion.p 
            className="subheadline-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            No bloated tech. No wasted time. Just real results, delivered fast.
          </motion.p>
        </motion.div>

        <div className="pricing-cards">
          <motion.div 
            className="pricing-card consulting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-content">
              <h2>AI Strategy & Consulting Session</h2>
              <p className="card-subtitle">Clarity Before Complexity. One Call to Unblock It All.</p>
              <div className="features">
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>1:1 with a Senior Automation Architect</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Deep-dive audit into your workflows, tech stack, and bottlenecks</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Clear roadmap showing where AI will save the most time and money</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Real-time ideation: workflows, automations, and tools — mapped on the spot</span>
                </motion.div>
              </div>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="pricing-card partner"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="popular-tag">Most Popular</div>
            <div className="card-content">
              <h2>Ailevate Partner Program</h2>
              <p className="card-subtitle">Done-for-You AI Systems. Built, Trained, and Launched.</p>
              <div className="features">
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Dedicated Project Manager & Automation Engineer</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Custom-built AI workflows, fully integrated into your stack</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Smart lead follow-up, CRM automation, dashboard tracking</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Private portal with all documentation & real-time updates</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Bi-weekly roadmap reviews & optimization sprints</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>VIP Slack/email support (24hr response time)</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Full-stack development included (apps, dashboards, automations)</span>
                </motion.div>
                <motion.div className="feature" {...fadeInUp}>
                  <span className="checkmark">✓</span>
                  <span>Built, launched, trained — all done for you</span>
                </motion.div>
              </div>
              <motion.button 
                className="cta-button glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* What We Offer Component */}
        <div className="mt-24">
          <WhatWeOffer isEmbedded={true} />
        </div>
      </div>
    </div>
  );
};

export default Pricing; 