import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, Users, X, Building2, Mail, User, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useToast } from '../../hooks/useToast';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  teamSize: z.string().min(1, 'Please select team size'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

type DemoFormData = z.infer<typeof demoSchema>;

const teamSizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute of ['00', '30']) {
      const time = `${hour.toString().padStart(2, '0')}:${minute}`;
      slots.push({ value: time, label: `${time} ${hour < 12 ? 'AM' : 'PM'}` });
    }
  }
  return slots;
};

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const { addToast } = useToast();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const formData = watch();

  const onSubmit = async (data: DemoFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addToast({
        type: 'success',
        title: 'Demo Scheduled Successfully! 🎉',
        message: 'Check your email for confirmation and meeting details.',
      });

      reset();
      setStep(1);
      onClose();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Scheduling Failed',
        message: 'Please try again later.',
      });
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  const stepVariants = {
    enter: { x: -20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden">
              <div className="relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
                  <motion.div
                    className="h-full bg-indigo-600"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 2) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="flex items-center justify-between p-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Schedule Your Demo
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <Input
                          label="Full Name"
                          {...register('name')}
                          error={errors.name?.message}
                          leftIcon={<User className="h-5 w-5" />}
                        />
                        <Input
                          label="Work Email"
                          type="email"
                          {...register('email')}
                          error={errors.email?.message}
                          leftIcon={<Mail className="h-5 w-5" />}
                        />
                        <Input
                          label="Company Name"
                          {...register('company')}
                          error={errors.company?.message}
                          leftIcon={<Building2 className="h-5 w-5" />}
                        />
                        <Select
                          label="Team Size"
                          options={teamSizes}
                          {...register('teamSize')}
                          error={errors.teamSize?.message}
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!formData.name || !formData.email || !formData.company || !formData.teamSize}
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <Input
                          label="Preferred Date"
                          type="date"
                          min={minDate}
                          {...register('date')}
                          error={errors.date?.message}
                          leftIcon={<Calendar className="h-5 w-5" />}
                        />
                        <Select
                          label="Preferred Time"
                          options={generateTimeSlots()}
                          {...register('time')}
                          error={errors.time?.message}
                        />

                        <div className="p-4 bg-indigo-50 rounded-lg">
                          <h3 className="font-medium text-indigo-900 mb-2">What to expect:</h3>
                          <ul className="space-y-2">
                            {[
                              'Personalized platform walkthrough',
                              'Q&A session with our experts',
                              'Custom solutions for your needs',
                              '30-minute session',
                            ].map((item, index) => (
                              <li key={index} className="flex items-center text-indigo-700">
                                <Check className="h-4 w-4 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          isLoading={isSubmitting}
                        >
                          Schedule Demo
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}