import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import heroImage from '../images/HomePageImage.png';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image5 from '../assets/image5.jpeg';
import '../styles/custom.css';

export default function Home() {
  const floatingAnimation = useAnimation();
  const [currentStep, setCurrentStep] = React.useState(1);
  
  useEffect(() => {
    floatingAnimation.start({
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [floatingAnimation]);

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

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Animated particles background */}
      <ParticlesBackground count={80} maxSize={6} maxDuration={25} />

      {/* Hero section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero content */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left column */}
            <motion.div className="flex-1 text-left max-w-2xl" variants={itemVariants}>
              <motion.div
                className="inline-block mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" }}
              >
                <span className="flex items-center gap-2">
                  <span className="animate-pulse">✨</span>
                  AI-Powered Growth Solutions
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-teal-200 to-cyan-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 80px rgba(45, 212, 191, 0.3)',
                  maxWidth: '95%'
                }}
              >
                We Build Intelligent AI Workflows That Drive Real Business Growth
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                From lead gen to operations, we automate the busywork so you can scale with confidence.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(45, 212, 191, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-white shadow-lg text-lg relative overflow-hidden group"
                    style={{
                      backgroundSize: '200% auto'
                    }}
                  >
                    <span className="relative z-10">Book Your Free Workflow Audit</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        filter: 'blur(15px)',
                        transform: 'scale(1.2)'
                      }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right column - Hero image */}
            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full max-w-xl" 
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
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Glowing background effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.98, 1.02, 0.98]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.img
                  src={heroImage}
                  alt="AI Technology"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(45, 212, 191, 0.3))'
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(45, 212, 191, 0.3)',
                      '0 0 50px rgba(45, 212, 191, 0.6)',
                      '0 0 0 rgba(45, 212, 191, 0.3)'
                    ],
                  }}
                  transition={{
                    duration: 3,
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
      <section className="py-20 bg-slate-800/50 mt-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 to-transparent opacity-70"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full border border-teal-500/30"
          animate={{
            rotate: 360,
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full border-2 border-blue-500/20"
          animate={{
            rotate: -360,
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      
      {/* Why Choose Us section */}
      <section className="py-20 bg-slate-900/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines cutting-edge AI technology with deep industry expertise to deliver solutions that truly transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Features */}
            <div className="space-y-8">
              {[
                {
                  icon: "🧠",
                  title: "Customized AI Solutions",
                  description: "We don't believe in one-size-fits-all. Every AI solution we build is tailored to your specific business challenges and goals."
                },
                {
                  icon: "🏆",
                  title: "Industry Expertise",
                  description: "Our team combines AI specialists with industry veterans who understand your market's unique demands and opportunities."
                },
                {
                  icon: "🔄",
                  title: "Seamless Integration",
                  description: "Our solutions integrate smoothly with your existing systems and workflows, minimizing disruption while maximizing impact."
                },
                {
                  icon: "🚀",
                  title: "Ongoing Support & Evolution",
                  description: "We provide continuous support and regularly update our solutions to adapt to your changing business needs."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 items-start p-6 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Results Card */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative glass-card rounded-lg p-8">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Proven Results</h3>
                  <p className="text-gray-300 mb-4">Our clients typically see:</p>
                  <ul className="space-y-3">
                    {[
                      "40% increase in operational efficiency",
                      "60% reduction in response time",
                      "35% cost savings through automation",
                      "95% customer satisfaction with AI interactions"
                    ].map((stat, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 text-gray-200"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                      >
                        <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{stat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* How It Works content */}
          {/* ... */}
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials content */}
          {/* ... */}
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA content */}
          {/* ... */}
        </div>
      </section>
      
      {/* The Ailevate Method Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Ailevate Method content */}
          {/* ... */}
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 relative overflow-hidden">
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
              text="Our Implementation Process" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="fadeIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures we deliver high-quality, effective AI solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: "🔍",
                title: "Discovery",
                description: "We analyze your business needs, challenges, and goals to identify where AI can make the biggest impact."
              },
              {
                step: "2",
                icon: "✏️",
                title: "Design",
                description: "Our experts design a customized AI solution that addresses your specific requirements and integrates with your systems."
              },
              {
                step: "3",
                icon: "💻",
                title: "Development",
                description: "We build and test your solution, ensuring it meets our high standards for performance, security, and usability."
              },
              {
                step: "4",
                icon: "🚀",
                title: "Deployment",
                description: "We implement the solution, train your team, and provide ongoing support to ensure long-term success."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative glass-card rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-slate-900 font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="w-8 h-0.5 bg-teal-400/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 