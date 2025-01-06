import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '../../hooks/useAnimation';
import { useScrollAnimation } from '../../hooks/useAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
      className={className}
    >
      {children}
    </motion.div>
  );
}