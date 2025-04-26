import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import heroImage from '../images/HomePageImage.png';
import '../styles/custom.css';

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const features = [
    "Personalized AI Solutions",
    "Advanced Data Analytics",
    "24/7 Automated Support",
    "Real-time Insights"
  ];

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Animated particles background */}
      <ParticlesBackground count={60} maxSize={6} maxDuration={25} />

      {/* Hero section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
              <AnimatedHeading 
                tag="h1" 
                text="Elevate Your Business with AI Solutions" 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-animate-gradient"
                animation="fadeIn"
                splitWords={true}
              />
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                We combine cutting-edge artificial intelligence with industry expertise to transform how your business operates and delivers value.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                variants={itemVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    custom={index}
                    variants={featureVariants}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-teal-400" />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg"
                  >
                    Explore Solutions
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-semibold border border-teal-400 text-teal-400 hover:bg-teal-400/10"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 1 
                  } 
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.5 }
                }}
              >
                <motion.img
                  src={heroImage}
                  alt="AI Technology"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(0,209,255,0.3)", "0px 0px 30px rgba(0,209,255,0.6)", "0px 0px 0px rgba(0,209,255,0.3)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(20,184,166,0.2) 0%, rgba(56,189,248,0.2) 100%)",
                      "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(20,184,166,0.2) 100%)",
                      "linear-gradient(135deg, rgba(20,184,166,0.2) 0%, rgba(56,189,248,0.2) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-20 bg-slate-800/50 mt-64">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedHeading 
              tag="h2" 
              text="Our AI-powered Solutions" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="slideIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover how our cutting-edge AI technologies can transform your business processes, 
              increase efficiency, and drive innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Analytics",
                description: "Process vast amounts of data to extract actionable insights and patterns.",
                icon: "📊"
              },
              {
                title: "AI Chatbots",
                description: "24/7 customer support with intelligent conversation capabilities.",
                icon: "💬"
              },
              {
                title: "Predictive Modeling",
                description: "Forecast trends and outcomes to make informed business decisions.",
                icon: "📈"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedHeading 
              tag="h2" 
              text="What Our Clients Say" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="highlightIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto">
              Companies across industries are achieving remarkable results with our AI solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "AiLevate's analytics solution helped us increase our conversion rate by 40% within just three months.",
                author: "Sarah Johnson",
                company: "Retail Solutions Inc."
              },
              {
                quote: "The predictive modeling tools have transformed our supply chain management. We've reduced costs by 25%.",
                author: "Michael Chen",
                company: "Global Logistics"
              },
              {
                quote: "Their AI chatbot handles over 70% of our customer inquiries, freeing our team to focus on complex issues.",
                author: "Emily Rodriguez",
                company: "CustomerFirst Services"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="mb-4 text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedHeading 
              tag="h2" 
              text="Ready to Transform Your Business?" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="scaleIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Join the hundreds of businesses already leveraging our AI solutions to drive growth,
              efficiency, and innovation.
            </p>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 