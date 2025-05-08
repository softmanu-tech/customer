
import React, { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number; // Visibility threshold (0-1)
  rootMargin?: string; // Margin around the root
  delay?: number; // Delay in ms
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'scale' | 'rotate'; // Animation type
}

// Animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  }
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  delay = 0,
  animation = 'fadeIn'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    threshold,
    rootMargin
  });
  
  const selectedAnimation = animations[animation];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
