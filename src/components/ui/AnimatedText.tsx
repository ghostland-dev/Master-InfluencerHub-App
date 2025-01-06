import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../hooks/useAnimation';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}