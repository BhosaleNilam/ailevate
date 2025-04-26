import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import homepageImage from '../images/homepage_image.webp';
import AnimatedHeading from '../components/AnimatedHeading';

export default function Home() {
  const features = [
    'Up to 14 day free trial',
    'No hidden fees',
    'Boost Client ROI',
    'Scale Your Agency Faster',
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              transition={{ 
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div 
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-900/20 text-sm font-medium text-teal-400 mb-4">
                  Spring 2024 Launch
                </span>
              </motion.div>
              
              <AnimatedHeading 
                tag="h1" 
                text="🚀 Introducing AiLevate" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                animation="highlightIn"
                wordHighlight={[1]}
                highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
              />
              
              <motion.p 
                className="text-xl text-slate-300 mb-6"
                variants={itemVariants}
              >
                An AI-powered automation agency focusing on custom solutions for real businesses. We help businesses stop wasting time on tasks that should've been automated yesterday.
              </motion.p>
              
              <motion.p
                className="text-lg text-slate-400 mb-8 italic"
                variants={itemVariants}
              >
                "We're not just riding the AI wave. We're AiLevate-ing with it."
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <motion.button 
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-teal-500/20 hover:from-teal-400 hover:to-blue-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link to="/services" className="text-slate-300 hover:text-teal-400 transition duration-300 flex items-center gap-2">
                  Explore Solutions <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
                variants={imageVariants}
                whileHover="hover"
              >
                <img 
                  src={homepageImage} 
                  alt="AI Automation" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedHeading 
              tag="h2" 
              text="Here's what we automate (so you don't have to)" 
              className="text-3xl md:text-4xl font-bold mb-6"
              animation="fadeIn"
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Outreach & Qualification",
                description: "Automated systems that reach out to potential clients, qualify their interest, and nurture them through your sales funnel.",
                icon: "📊"
              },
              {
                title: "Actual Conversions",
                description: "AI systems that move beyond just generating leads - they help convert those leads into paying customers.",
                icon: "🔄"
              },
              {
                title: "Reputation Management",
                description: "Set-and-forget systems that monitor, manage, and improve your online reputation completely on autopilot.",
                icon: "⭐"
              },
              {
                title: "Custom CRM & Workflow Systems",
                description: "Fully tailored CRMs and workflow automations designed specifically for your business processes.",
                icon: "🔄"
              },
              {
                title: "24/7 AI Agents",
                description: "AI agents that work around the clock handling your repetitive tasks so your team can focus on high-value work.",
                icon: "🤖"
              },
              {
                title: "Efficiency Optimization",
                description: "Solutions that eliminate the 60% of inefficiencies in your business that could be mitigated by AI automations.",
                icon: "⚡"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Now Section */}
      <div className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedHeading 
              tag="h2" 
              text="But... why now?" 
              className="text-3xl md:text-4xl font-bold mb-6"
              animation="fadeIn"
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            <p className="text-xl text-slate-300 mb-8">
              Because spring isn't just about the weather changing. It's about momentum.
            </p>
            <p className="text-lg text-slate-400 mb-12">
              Businesses are tired. Tired of clunky tools. Tired of manual processes. Tired of wasting energy on the 60% of inefficiencies that could be mitigated by AI Automations.
            </p>
            
            <motion.div 
              className="p-8 bg-slate-800/30 rounded-xl border border-teal-500/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-400">AI isn't here to replace people. It's here to unlock them!</h3>
              <p className="text-lg text-slate-300">
                Let it handle the heavy lifting—so your team can focus on the parts of work they actually enjoy (and excel at).
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 bg-gradient-to-br from-blue-900/70 to-slate-950/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              tag="h2"
              text="That's the world we're building at AiLevate."
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              animation="highlightIn"
              wordHighlight={[5]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Join us. Or better yet, let our AI Agents join you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 