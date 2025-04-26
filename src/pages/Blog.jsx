import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/custom.css';
import AnimatedHeading from '../components/AnimatedHeading';

export default function Blog() {
  const blogPosts = [
    {
      title: 'How AI is Revolutionizing Customer Service',
      date: 'March 15, 2024',
      category: 'AI Technology',
      excerpt: 'Discover how artificial intelligence is transforming the customer service landscape and helping businesses provide better support.',
      imageUrl: '/blog1.jpg'
    },
    {
      title: 'The Future of Automated Lead Generation',
      date: 'March 10, 2024',
      category: 'Lead Generation',
      excerpt: 'Learn about the latest trends in automated lead generation and how AI is making it more efficient than ever.',
      imageUrl: '/blog2.jpg'
    },
    {
      title: '5 Ways to Boost Your Online Reviews',
      date: 'March 5, 2024',
      category: 'Business Growth',
      excerpt: 'Explore effective strategies to increase your online reviews and improve your business reputation.',
      imageUrl: '/blog3.jpg'
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
      transition: { duration: 0.4 } 
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
              <span className="text-sm font-medium tracking-wide text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">OUR BLOG</span>
            </motion.div>
            
            <AnimatedHeading
              tag="h1"
              text="Latest Insights & Updates"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              animation="highlightIn"
              wordHighlight={[1, 2]}
              highlightClass="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            />
            
            <motion.div 
              className="max-w-3xl text-lg text-gray-300"
              variants={itemVariants}
            >
              <p>Discover the latest developments in AI technology, practical applications, and industry insights that can help transform your business.</p>
            </motion.div>
          </motion.div>
          
          {/* Blog Post Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 rounded-xl overflow-hidden flex flex-col border border-slate-800"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <motion.img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-teal-500/50 backdrop-blur-sm text-xs font-medium text-white">{post.category}</span>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${index}`} className="group inline-flex items-center text-teal-400 hover:text-teal-300">
                    Read more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* View All Button */}
          <div className="mt-12 text-center">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Articles
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 