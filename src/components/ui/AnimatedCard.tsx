import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { fadeInUp } from '../../hooks/useAnimation';

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay }}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  );
}