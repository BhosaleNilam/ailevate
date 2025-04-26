import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 120
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="max-w-3xl"
            >
              <AnimatedHeading
                as="h1"
                animation="splitWords"
                splitWords={true}
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Skyrocket Your Business with AI-Powered Solutions
              </AnimatedHeading>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                variants={itemVariants}
              >
                Struggling with missed calls, low reviews, and lost leads? Our AI-Powered Growth System fixes this instantly—turning calls into customers, automating 5-star reviews, and building your customer database for repeat sales.
              </motion.p>

              <motion.div 
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {['More reviews → Higher ranking → More customers.', 
                  'More follow-ups → More booked appointments.', 
                  'Pay $0 Until You See Results – No Risk, Just Growth.'].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircleIcon className="h-6 w-6 text-primary animate-pulse" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to="/get-started" 
                    className="inline-block nav-button bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                  >
                    Try It FREE – Only Pay When You See Results!
                  </Link>
                </motion.div>
                <motion.p 
                  className="text-sm text-purple-300 animate-pulse"
                  variants={itemVariants}
                >
                  Only 10 Free AI Setups Available This Month – Act Fast!
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              variants={imageVariants}
              whileHover="hover"
            >
              {/* Animated image container with effects */}
              <div className="relative mx-auto max-w-lg">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-purple-300/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Gradient border */}
                <div className="gradient-border p-2 rounded-lg relative z-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  <img 
                    src={homepageImage} 
                    alt="AiLEVATE Agency Whiteboard" 
                    className="rounded-lg w-full max-w-full mx-auto relative z-20 transform transition-all duration-500"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-400 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 p-2 sm:p-3 bg-purple-900/80 backdrop-blur-sm rounded-lg shadow-xl z-30"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="text-xs font-bold text-purple-300">AI-POWERED</div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 p-2 sm:p-3 bg-purple-800/80 backdrop-blur-sm rounded-lg shadow-xl z-30"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0] 
                  }}
                  transition={{
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  <div className="text-xs font-bold text-purple-300">AUTOMATED</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 bg-purple-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedHeading
              as="h2"
              animation="highlight"
              highlight={true}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              How Our *AI-Powered Solution* Works For You
            </AnimatedHeading>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our AI system works around the clock to ensure you never miss an opportunity.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Lead Capture",
                description: "AI answers missed calls, captures lead details, and books appointments automatically.",
                icon: "📱",
                color: "from-purple-500 to-indigo-600"
              },
              {
                title: "Review Automation",
                description: "Generates authentic 5-star reviews from happy customers without manual effort.",
                icon: "⭐",
                color: "from-indigo-500 to-blue-600"
              },
              {
                title: "Growth Analytics",
                description: "Track performance with real-time dashboards showing ROI and growth metrics.",
                icon: "📊",
                color: "from-blue-500 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 } 
                }}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br opacity-20" style={{ background: `linear-gradient(${feature.color})` }}></div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedHeading
              as="h2"
              animation="scaleIn"
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              What Our Clients Say
            </AnimatedHeading>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Since implementing AiLEVATE, our missed calls have been completely eliminated and our bookings have increased by 37%.",
                author: "Sarah Johnson",
                company: "BeautySpace Salon",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
              },
              {
                quote: "The AI call answering has transformed our business. We're capturing leads 24/7 and our customer satisfaction is at an all-time high.",
                author: "Michael Rodriguez",
                company: "Rodriguez Plumbing",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-xl relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 * index }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="absolute top-6 left-6 text-purple-400 text-4xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-purple-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 bg-gradient-to-br from-purple-900/70 to-purple-950/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              as="h2"
              animation="slideIn"
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </AnimatedHeading>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Get started today with our risk-free trial. No setup fees, no contracts.
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
                className="inline-block nav-button bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Start Your Free Trial
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 