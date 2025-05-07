import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import IntegrationLogos from '../components/IntegrationLogos';
import heroImage from '../images/HomePageImage.png';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image5 from '../assets/image4.jpeg';
import '../styles/custom.css';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Refs for each step
  const stepRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  
  useEffect(() => {
    // Set up intersection observers for each step
    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // When step is visible, set it as active
          // Use a lower threshold for the last step to ensure it activates properly
          const threshold = index === stepRefs.length - 1 ? 0.4 : 0.7;
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setActiveStep(index);
            // We need to expose this state to the ProcessImages component
            window.currentProcessStep = index;
          }
        },
        { threshold: [0.4, 0.7] }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });
    
    // Cleanup observers
    return () => {
      observers.forEach((observer, index) => {
        if (stepRefs[index].current) {
          observer.unobserve(stepRefs[index].current);
        }
      });
    };
  }, []);
  
  // Handle manual navigation between steps
  const scrollToStep = (index) => {
    if (stepRefs[index] && stepRefs[index].current) {
      // For the last step, scroll to a position that ensures it's fully visible
      if (index === steps.length - 1) {
        const container = stepRefs[index].current.closest('.snap-container');
        if (container) {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: 'smooth'
          });
        } else {
          stepRefs[index].current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        stepRefs[index].current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We deep dive into your business — systems, workflows, challenges, and bottlenecks — to identify exactly where automation and AI can deliver the biggest ROI.",
      listItems: [
        "Analyze current processes",
        "Identify pain points and bottlenecks",
        "Map existing tech stack",
        "Calculate potential ROI"
      ]
    },
    {
      number: "02",
      title: "Design",
      description: "We map the solution. Custom workflows, smart integrations, logic — all tailored to your tech stack and operations. No fluff. Just what works.",
      listItems: [
        "Create custom workflow diagrams",
        "Define integration points",
        "Design user experience",
        "Establish success metrics"
      ]
    },
    {
      number: "03",
      title: "Development",
      description: "We build it out — clean, secure, and tested for performance. Whether it's an automation or a custom tool, we make sure it runs like clockwork.",
      listItems: [
        "Build automation workflows",
        "Implement AI integrations",
        "Test for reliability and security",
        "Optimize for performance"
      ]
    },
    {
      number: "04",
      title: "Deployment",
      description: "We launch, train your team, and stay with you post-launch to make sure the system actually sticks. Because tools mean nothing if no one uses them.",
      listItems: [
        "Seamless implementation",
        "Comprehensive team training",
        "Detailed documentation",
        "Ongoing support and optimization"
      ]
    }
  ];
  
  return (
    <>
      <div className="space-y-36 md:space-y-44 pb-20 px-2">
        {steps.map((step, index) => (
          <div 
            key={index}
            ref={stepRefs[index]}
            className={`relative transition-all duration-500 process-step min-h-[500px] mt-10 ${
              index === steps.length - 1 ? 'snap-end' : 'snap-start'
            } snap-always snap-item ${
              activeStep === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            }`}
          >
            <div className={`absolute left-0 top-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500/30 to-blue-500/30 backdrop-blur-xl border transition-all duration-500 ${activeStep === index ? 'border-teal-400/60 shadow-xl shadow-teal-500/20' : 'border-teal-400/40 shadow-lg shadow-teal-500/10'} z-10`}>
              <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent transition-all ${activeStep === index ? 'process-number-pulse' : ''}`}>
                {step.number}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pl-20 md:pl-24 pt-10 pr-2 md:pr-4"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                animate={{
                  color: activeStep === index ? 'rgb(20, 184, 166)' : 'rgb(255, 255, 255)'
                }}
                transition={{ duration: 0.4 }}
              >
                {step.title}
              </motion.h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>
              <ul className="space-y-3">
                {step.listItems.map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-1 mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Process Step Navigation Dots - Hidden */}
      <div className="hidden">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === index 
                ? 'bg-teal-400 w-6' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const ProcessImages = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Sync with ProcessSteps component through window object
  useEffect(() => {
    const checkActiveStep = () => {
      if (typeof window.currentProcessStep === 'number') {
        setActiveImage(window.currentProcessStep);
      }
    };
    
    // Add scroll event listener to check for changes
    window.addEventListener('scroll', checkActiveStep);
    
    // Initial check
    checkActiveStep();
    
    // Interval as backup to ensure sync
    const syncInterval = setInterval(checkActiveStep, 300);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkActiveStep);
      clearInterval(syncInterval);
    };
  }, []);
  
  return (
    <>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: activeImage === 0 ? 1 : 0,
          scale: activeImage === 0 ? 1 : 0.95,
          y: activeImage === 0 ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-70"></div>
        <img 
          src={image1} 
          alt="Discovery Phase" 
          className="w-full h-full rounded-xl object-cover shadow-2xl relative z-10 border border-white/10"
        />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-teal-500/30 z-20 pointer-events-none"
          animate={{
            boxShadow: activeImage === 0 ? [
              '0 0 0 rgba(20, 184, 166, 0.1)',
              '0 0 20px rgba(20, 184, 166, 0.3)',
              '0 0 0 rgba(20, 184, 166, 0.1)'
            ] : ['0 0 0 rgba(20, 184, 166, 0)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: activeImage === 1 ? 1 : 0,
          scale: activeImage === 1 ? 1 : 0.95,
          y: activeImage === 1 ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-70"></div>
        <img 
          src={image2} 
          alt="Design Phase" 
          className="w-full h-full rounded-xl object-cover shadow-2xl relative z-10 border border-white/10"
        />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-blue-500/30 z-20 pointer-events-none"
          animate={{
            boxShadow: activeImage === 1 ? [
              '0 0 0 rgba(59, 130, 246, 0.1)',
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 0 rgba(59, 130, 246, 0.1)'
            ] : ['0 0 0 rgba(59, 130, 246, 0)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: activeImage === 2 ? 1 : 0,
          scale: activeImage === 2 ? 1 : 0.95,
          y: activeImage === 2 ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-70"></div>
        <img 
          src={image3} 
          alt="Development Phase" 
          className="w-full h-full rounded-xl object-cover shadow-2xl relative z-10 border border-white/10"
        />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-cyan-500/30 z-20 pointer-events-none"
          animate={{
            boxShadow: activeImage === 2 ? [
              '0 0 0 rgba(6, 182, 212, 0.1)',
              '0 0 20px rgba(6, 182, 212, 0.3)',
              '0 0 0 rgba(6, 182, 212, 0.1)'
            ] : ['0 0 0 rgba(6, 182, 212, 0)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: activeImage === 3 ? 1 : 0,
          scale: activeImage === 3 ? 1 : 0.95,
          y: activeImage === 3 ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-70"></div>
        <img 
          src={image5} 
          alt="Deployment Phase" 
          className="w-full h-full rounded-xl object-cover shadow-2xl relative z-10 border border-white/10"
        />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-indigo-500/30 z-20 pointer-events-none"
          animate={{
            boxShadow: activeImage === 3 ? [
              '0 0 0 rgba(99, 102, 241, 0.1)',
              '0 0 20px rgba(99, 102, 241, 0.3)',
              '0 0 0 rgba(99, 102, 241, 0.1)'
            ] : ['0 0 0 rgba(99, 102, 241, 0)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </>
  );
};

export default function Home() {
  const floatingAnimation = useAnimation();
  const [currentStep, setCurrentStep] = React.useState(1);
  const location = useLocation();
  
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

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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

  const faqs = [
    {
      icon: "❓",
      question: "What kinds of businesses do you work with?",
      answer: "We work with small to mid-sized businesses, solopreneurs, and lean teams who want to scale without adding more people. If you're an operator buried in tasks, managing messy handoffs, or losing time to manual work, you're exactly who we help. Our best clients want systems that make their business run smoother, not more software to manage."
    },
    {
      icon: "⏱️",
      question: "How long does it take to implement automations?",
      answer: "Most projects take 2–6 weeks, depending on complexity. We move fast — and we focus on building systems that actually get used, not just demos that look cool."
    },
    {
      icon: "💰",
      question: "How does your pricing work?",
      answer: "We scope every project based on the outcomes you want, not hours. We offer flat-rate projects, monthly retainers, or a hybrid — depending on how hands-on you want us."
    },
    {
      icon: "🎓",
      question: "Do you offer training or support after launch?",
      answer: "Absolutely. We don't just hand off a system and bounce. We train your team, document everything, and offer optional ongoing support if you want us in your corner long-term."
    },
    {
      icon: "🧠",
      question: "What kind of tools do you build with?",
      answer: "We use a mix of low-code tools like n8n, Zapier, Make, Airtable, and OpenAI — plus custom dev when needed. We choose the stack that solves the problem, not what sounds fancy. The goal is simple: it works, it scales, and you don't need a tech team to maintain it."
    },
    {
      icon: "🏗️",
      question: "Do you build from scratch or use templates?",
      answer: "All workflows and systems are 100% custom to your ops and stack. Templates don't scale. We build infrastructure that fits your business — not someone else's funnel."
    },
    {
      icon: "📈",
      question: "How do I know if AI or automation is right for my business?",
      answer: "If you're doing repetitive tasks, managing a messy stack, or missing follow-ups — it's time. Book a free audit and we'll show you exactly what to automate (and what not to)."
    },
    {
      icon: "🧩",
      question: "What industries do you specialize in?",
      answer: "We've worked with agencies, consultants, eCom brands, SaaS companies, and service-based businesses. What matters more is your mindset: if you're ready to grow with systems — we've got you."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // Add invisible scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      .invisible-scrollbar::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      .invisible-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .invisible-scrollbar::-webkit-scrollbar-thumb {
        background: transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
            <motion.div 
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Our Capabilities
              </span>
            </motion.div>
            <AnimatedHeading 
              tag="h2" 
              text="Everything You Need - Automated, Integrated, and Built for Scale" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="fadeIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto">
              From AI systems to custom-built tools, we deliver the full tech stack your business needs to run faster, smarter, and more efficiently - all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛠️",
                title: "Custom AI Workflow Design",
                description: "We build intelligent automations tailored to how your business actually runs - eliminating repetitive tasks and freeing up your team to focus on growth."
              },
              {
                icon: "🔄",
                title: "End-to-End Automation Systems",
                description: "From lead capture to client onboarding and internal ops, we create seamless pipelines that keep your business running, even when you're off the clock."
              },
              {
                icon: "📊",
                title: "Live Analytics & Dashboards",
                description: "Track impact, time saved, and performance in real-time. No more guessing - just clean, actionable data to guide your next move."
              },
              {
                icon: "🔐",
                title: "Smart Access & Enterprise-Level Security",
                description: "Protect your data and your team. We design with permission layers, role control, and built-in compliance so you can scale with confidence."
              },
              {
                icon: "☁️",
                title: "Cloud-Native, Fully Managed",
                description: "No servers, no headaches. We host, monitor, and maintain everything - so you stay focused on growth, not tech issues."
              },
              {
                icon: "🤝",
                title: "Real Human Support, Not Just Tech",
                description: "You're not alone. Our team guides you from strategy to execution, with real people you can talk to and trust."
              },
              {
                icon: "💻",
                title: "Custom App & Web Development",
                description: "We design and develop fast, scalable web apps, automation tools, and full digital platforms tailored to your exact needs - from internal dashboards to client-facing systems."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col p-6 rounded-lg glass-card hover-lift transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 flex-grow">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Logos Section */}
      <IntegrationLogos />
      
      {/* Process Steps Section */}
      <section id="process" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"
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
            className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
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
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </motion.div>
            <AnimatedHeading 
              tag="h2" 
              text="Our Implementation Process" 
              className="text-3xl sm:text-4xl font-bold mb-6 text-animate-gradient"
              animation="fadeIn"
            />
            <p className="text-gray-300 max-w-3xl mx-auto">
              We build systems people actually use. From discovery to deployment, we focus on solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Column - Scrollable Content */}
            <div className="lg:col-span-6 relative h-[650px] lg:h-[750px] overflow-y-auto invisible-scrollbar pb-32 snap-y snap-mandatory snap-container pl-3 md:pl-5">
              <ProcessSteps />
            </div>
            
            {/* Right Column - Images that change on scroll */}
            <div className="lg:col-span-6 sticky top-24 h-[400px] md:h-[500px] hidden lg:block">
              <div className="relative w-full h-full">
                {/* Images for each step */}
                <ProcessImages />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500/20 to-teal-500/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Got Questions?
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to know about our automation services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className={`relative p-6 rounded-2xl transition-all duration-300 group ${
                      openFAQ === index 
                        ? 'bg-gradient-to-r from-slate-800/80 to-slate-900/80 shadow-lg border border-white/[0.08]' 
                        : 'bg-slate-800/50 hover:bg-slate-800/70 border border-white/[0.05]'
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 to-blue-500/0 opacity-0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-opacity duration-300" />
                    
                    <div className="relative flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                        openFAQ === index
                          ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-white'
                          : 'bg-slate-700/50 text-slate-300'
                      }`}>
                        <span className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                          {faq.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: openFAQ === index ? 'auto' : 0,
                            opacity: openFAQ === index ? 1 : 0
                          }}
                          transition={{ 
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: openFAQ === index ? 0.1 : 0 }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                      <motion.div
                        animate={{ 
                          rotate: openFAQ === index ? 180 : 0,
                          backgroundColor: openFAQ === index ? 'rgba(45, 212, 191, 0.1)' : 'transparent'
                        }}
                        transition={{ duration: 0.3 }}
                        className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          openFAQ === index ? 'bg-teal-500/10' : 'group-hover:bg-slate-700/50'
                        }`}
                      >
                        <svg 
                          className={`w-5 h-5 transition-colors duration-300 ${
                            openFAQ === index ? 'text-teal-400' : 'text-slate-400 group-hover:text-teal-300'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 