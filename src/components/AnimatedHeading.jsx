import React from 'react';
import { motion } from 'framer-motion';

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  highlightIn: {
    initial: { backgroundSize: "0% 30%", backgroundPosition: "0 100%" },
    animate: { backgroundSize: "100% 30%", backgroundPosition: "0 100%" },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  splitText: {
    initial: (custom) => ({ 
      opacity: 0,
      y: custom % 2 === 0 ? 20 : -20
    }),
    animate: { 
      opacity: 1,
      y: 0
    },
    transition: (custom) => ({ 
      duration: 0.7, 
      ease: "easeOut",
      delay: custom * 0.04
    })
  }
};

const AnimatedHeading = ({
  as: Component = "h2",
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
  highlightClassName = "",
  splitWords = false,
  highlight = false,
  ...props
}) => {
  if (splitWords && typeof children === 'string') {
    // Split the string into words and animate each word separately
    const words = children.split(' ');
    
    return (
      <Component className={`inline-block ${className}`} {...props}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={animationVariants.splitText}
            className="inline-block mx-[0.15em] first:ml-0"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    );
  }
  
  if (highlight && typeof children === 'string') {
    // Extract the text within asterisks to highlight, e.g. "This is *highlighted* text"
    const parts = children.split(/\*([^*]+)\*/);
    
    return (
      <Component className={className} {...props}>
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            // This is a part that was within asterisks
            return (
              <motion.span
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={animationVariants.highlightIn}
                className={`bg-gradient-to-r from-purple-400/30 to-purple-600/30 inline-block bg-no-repeat ${highlightClassName}`}
                style={{ backgroundSize: "0% 30%", backgroundPosition: "0 100%" }}
                transition={{ delay: delay + 0.3 }}
              >
                {part}
              </motion.span>
            );
          }
          return part;
        })}
      </Component>
    );
  }
  
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={animationVariants[animation]}
      transition={{ 
        delay,
        duration: animationVariants[animation].transition?.duration || 0.7,
        ease: animationVariants[animation].transition?.ease || "easeOut"
      }}
    >
      <Component className={className} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

export default AnimatedHeading;