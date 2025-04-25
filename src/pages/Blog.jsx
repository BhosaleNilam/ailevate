import React from 'react';
import { motion } from 'framer-motion';
import '../styles/custom.css';

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

  return (
    <div className="min-h-screen pt-24">
      <div className="floating-dots"></div>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 neon-text">Latest Insights</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto gradient-text">
            Stay updated with the latest trends in AI, business growth, and customer success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.02 }
              }}
              className="glass-card card-hover-effect rounded-xl overflow-hidden"
            >
              <motion.div 
                className="h-48 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              <motion.div 
                className="p-6"
                variants={{
                  hover: { y: -5 }
                }}
              >
                <motion.div 
                  className="flex items-center space-x-2 mb-4"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-purple-300 text-sm">{post.date}</span>
                  <span className="text-purple-400">•</span>
                  <span className="gradient-border px-2 py-1 text-xs text-purple-200">
                    {post.category}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 gradient-text">{post.title}</h3>
                <p className="text-purple-100 mb-4">{post.excerpt}</p>
                <motion.button 
                  className="btn-glow group flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Read More 
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 