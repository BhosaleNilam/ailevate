import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import { Link } from 'react-router-dom';
import '../styles/custom.css';

export default function About() {
  const coreValues = [
    {
      name: 'Our Mission',
      role: 'What drives us',
      description: 'At AiLevate, we\'re on a mission to help businesses stop wasting time on tasks that should\'ve been automated yesterday. We create custom AI solutions that enable real business results.',
      icon: '🚀'
    },
    {
      name: 'Our Vision',
      role: 'Where we\'re headed',
      description: 'We envision a world where AI isn\'t replacing people—it\'s unlocking them. Where teams can focus on the work they enjoy and excel at, while AI handles the repetitive tasks.',
      icon: '🔮'
    },
    {
      name: 'Our Values',
      role: 'What we believe in',
      description: 'Innovation without ego. Technology with purpose. Automation with a human touch. We believe AI should serve people, not the other way around.',
      icon: '✨'
    }
  ];
  
  const services = [
    {
      title: 'Lead Outreach & Qualification',
      description: 'Automated systems that reach out to potential clients and nurture them through your sales funnel.'
    },
    {
      title: 'Conversion Automation',
      description: 'AI systems that help convert qualified leads into paying customers with minimal human intervention.'
    },
    {
      title: 'Reputation Management',
      description: 'Set-and-forget systems that monitor and improve your online reputation completely on autopilot.'
    },
    {
      title: 'Custom CRM & Workflow Systems',
      description: 'Tailored systems designed specifically for your business processes and integration needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Particles Background */}
      <ParticlesBackground count={40} maxSize={5} maxDuration={30} />
      
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full border border-teal-500/30 bg-teal-900/20"
            >
              <span className="text-sm font-medium text-teal-400">Spring 2024 Launch</span>
            </motion.div>
            
            <AnimatedHeading 
              tag="h1" 
              text="🚀 Introducing AiLevate"
              className="text-5xl font-bold text-white mb-6 text-animate-gradient"
              animation="highlightIn"
              wordHighlight={[1]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <motion.p 
              className="text-xl text-teal-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              An AI-powered automation agency focusing on custom solutions for real businesses
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <p className="text-gray-300 text-lg mb-6">
              Spring's here! And it feels like the perfect time to launch something that's been in the works for months. I've been heads-down for a while - Testing. Building. Refining.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Now it's time to bring it into the light: AiLevate - an AI-powered automation agency that helps businesses stop wasting time on tasks that should've been automated yesterday.
            </p>
            <p className="text-xl text-teal-400 italic mb-6">
              "We're not just riding the AI wave. We're AiLevate-ing with it."
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Why Now Section */}
      <div className="py-20 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            tag="h2" 
            text="But... why now?"
            className="text-3xl font-bold text-white text-center mb-12 text-animate-gradient"
            animation="highlightIn"
            wordHighlight={[0, 1]}
            highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-xl mb-10"
            >
              <p className="text-xl text-gray-300 mb-6">
                Because spring isn't just about the weather changing. It's about momentum.
              </p>
              <p className="text-lg text-gray-400">
                Businesses are tired. Tired of clunky tools. Tired of manual processes. Tired of wasting energy on the 60% of inefficiencies that could be mitigated by AI Automations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-xl border border-teal-500/20"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-4">AI isn't here to replace people. It's here to unlock them!</h3>
              <p className="text-lg text-gray-300">
                Let it handle the heavy lifting—so your team can focus on the parts of work they actually enjoy (and excel at).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            tag="h2" 
            text="Our Core Values and Principles"
            className="text-3xl font-bold text-white text-center mb-16 text-animate-gradient"
            animation="highlightIn"
            wordHighlight={[1, 2]}
            highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-bl-3xl"></div>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{value.name}</h3>
                <p className="text-teal-300 font-medium mb-4">{value.role}</p>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-animate-gradient bg-gradient-to-br from-slate-900/50 to-slate-950/50">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            tag="h2" 
            text="Here's what we automate (so you don't have to)"
            className="text-3xl font-bold text-white text-center mb-16 text-animate-gradient"
            animation="highlightIn"
            wordHighlight={[1, 2]}
            highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl p-6 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900/50 text-teal-400 mr-4">
                    <span>➝</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 pl-14">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-teal-400 mb-6">
              That's the world we're building at AiLevate.
            </p>
            <Link to="/contact">
              <motion.button
                className="btn-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 