import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-colors duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard; 