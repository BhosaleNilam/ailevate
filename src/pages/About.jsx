import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../components/AnimatedHeading';

export default function About() {
  const teamMembers = [
    {
      name: 'Our Mission',
      role: 'What drives us',
      description: 'At AiLEVATE, we are on a mission to revolutionize how businesses connect with their customers. We believe in harnessing the power of AI to create meaningful, efficient, and scalable customer relationships.',
      icon: '🚀'
    },
    {
      name: 'Our Vision',
      role: 'Where we are headed',
      description: 'We envision a future where every business, regardless of size, has access to enterprise-level AI tools that can help them grow and succeed in an increasingly digital world.',
      icon: '🔮'
    },
    {
      name: 'Our Values',
      role: 'What we believe in',
      description: 'Innovation, integrity, and customer success are at the heart of everything we do. We are committed to providing solutions that deliver real, measurable results for our clients.',
      icon: '✨'
    }
  ];
  
  const team = [
    {
      name: 'Jennifer Smith',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Head of AI Development',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      name: 'David Wilson',
      role: 'Lead UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/men/55.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <AnimatedHeading 
              as="h1" 
              animation="splitWords"
              splitWords={true}
              className="text-5xl font-bold text-white mb-6"
            >
              About AiLEVATE
            </AnimatedHeading>
            
            <motion.p 
              className="text-xl text-purple-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transforming businesses through intelligent automation and AI-powered solutions
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <p className="text-gray-300 text-lg">
              Founded in 2021, AiLEVATE has been at the forefront of bringing artificial intelligence solutions to businesses of all sizes. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="py-20 bg-purple-950/30 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            as="h2" 
            animation="highlight"
            highlight={true}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Our *Core Values* and Principles
          </AnimatedHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-3xl"></div>
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            as="h2" 
            animation="scaleIn"
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Meet Our Leadership Team
          </AnimatedHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <motion.div
        className="py-20 bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            as="h2" 
            animation="slideIn"
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Our Impact
          </AnimatedHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '20k+', label: 'Appointments Booked' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '500+', label: 'Businesses Helped' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl p-8 text-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-gradient mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  {stat.label}
                </motion.p>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 