import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../components/AnimatedHeading';
import { ArrowRightIcon, LightBulbIcon, BoltIcon, CubeIcon, ChatBubbleBottomCenterTextIcon, 
  ChartBarIcon, ClockIcon, CogIcon, ServerIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Lead Outreach",
      description: "Automated systems that reach out to potential clients, qualify their interest, and nurture them through your sales funnel.",
      features: [
        "AI-Powered Email Campaigns",
        "Automated Follow-ups",
        "Lead Scoring & Qualification",
        "Personalized Outreach at Scale"
      ],
      icon: "nlp"
    },
    {
      title: "Lead Qualification",
      description: "Let AI handle the qualification process, categorizing leads by intent, budget, and timeline to prioritize your team's efforts.",
      features: [
        "Intent Detection",
        "Budget Classification",
        "Timeline Assessment",
        "Automated Qualification Workflows"
      ],
      icon: "analytics"
    },
    {
      title: "Actual Conversions",
      description: "AI systems that move beyond just generating leads - they help convert those leads into paying customers.",
      features: [
        "Conversion-Optimized AI Agents",
        "Intelligent Follow-up Sequences",
        "Objection Handling Automation",
        "Personalized Conversion Pathways"
      ],
      icon: "custom"
    },
    {
      title: "Reputation Management",
      description: "Set-and-forget systems that monitor, manage, and improve your online reputation completely on autopilot.",
      features: [
        "Review Monitoring & Management",
        "Automated Response System",
        "Sentiment Analysis",
        "Reputation Recovery Protocols"
      ],
      icon: "vision"
    },
    {
      title: "Custom CRM & Workflow Systems",
      description: "Fully tailored CRMs and workflow automations designed specifically for your business processes.",
      features: [
        "Bespoke CRM Development",
        "Workflow Automation",
        "Seamless Integrations",
        "Custom Reporting & Analytics"
      ],
      icon: "automation"
    },
    {
      title: "24/7 AI Agents",
      description: "AI agents that work around the clock handling your repetitive tasks so your team can focus on high-value work.",
      features: [
        "Always-On Customer Support",
        "Task Automation",
        "Proactive Data Analysis",
        "Continuous Process Improvement"
      ],
      icon: "strategy"
    }
  ];

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
      transition: { duration: 0.5 } 
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

  const iconMap = {
    "strategy": <LightBulbIcon className="w-8 h-8" />,
    "custom": <CubeIcon className="w-8 h-8" />,
    "nlp": <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
    "vision": <BoltIcon className="w-8 h-8" />,
    "analytics": <ChartBarIcon className="w-8 h-8" />,
    "automation": <CogIcon className="w-8 h-8" />
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
              <span className="text-sm font-medium tracking-wide text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">OUR SERVICES</span>
            </motion.div>
            
            <AnimatedHeading
              tag="h1" 
              text="Here's what we automate (so you don't have to)"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              animation="highlightIn"
              wordHighlight={[2, 7]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <motion.div 
              className="max-w-3xl text-lg text-gray-300"
              variants={itemVariants}
            >
              <p>We help businesses stop wasting time on tasks that should've been automated yesterday. Our AI-powered solutions handle the repetitive work so your team can focus on what matters most.</p>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-teal-900/50 text-teal-400 mr-4">
                      {iconMap[service.icon] || <ServerIcon className="w-8 h-8" />}
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to="/contact">
                      <motion.button
                        className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Learn more
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center bg-slate-900/50 rounded-xl p-10 border border-slate-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <AnimatedHeading
              tag="h2" 
              text="AI isn't here to replace people. It's here to unlock them!"
              className="text-3xl md:text-4xl font-bold mb-6"
              animation="highlightIn"
              wordHighlight={[0, 8]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let AI handle the heavy lifting—so your team can focus on the parts of work they actually enjoy (and excel at). That's the world we're building at AiLevate.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="px-8 py-3 bg-transparent border border-teal-500/50 rounded-lg text-white font-medium hover:bg-teal-900/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn About Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 