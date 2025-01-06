import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button, { type ButtonProps } from '../ui/Button';
import { useDemo } from '../../hooks/useDemo';
import ScheduleDemoModal from './ScheduleDemoModal';

interface ScheduleDemoButtonProps extends ButtonProps {
  variant?: ButtonProps['variant'];
}

export default function ScheduleDemoButton({ variant = 'outline', className, ...props }: ScheduleDemoButtonProps) {
  const { isModalOpen, openModal, closeModal } = useDemo();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant={variant}
          onClick={openModal}
          className={`group ${className}`}
          {...props}
        >
          <Calendar className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
          Schedule Demo
          <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}