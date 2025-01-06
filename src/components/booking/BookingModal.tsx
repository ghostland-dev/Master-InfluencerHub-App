import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MessageSquare, DollarSign, X } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useToast } from '../../hooks/useToast';

const bookingSchema = z.object({
  contentType: z.string().min(1, 'Please select content type'),
  startDate: z.string().min(1, 'Start date is required'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
  description: z.string().min(20, 'Please provide more details about your request'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const contentTypes = [
  { value: 'post', label: 'Social Media Post' },
  { value: 'story', label: 'Story/Reel' },
  { value: 'video', label: 'Video Content' },
  { value: 'collaboration', label: 'Brand Collaboration' },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  influencer: {
    id: string;
    name: string;
    pricing: {
      postRate: number;
      storyRate: number;
      videoRate: number;
    };
  } | null;
}

export default function BookingModal({ isOpen, onClose, influencer }: BookingModalProps) {
  const { addToast } = useToast();
  const [step, setStep] = React.useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const contentType = watch('contentType');

  // Set initial budget based on content type
  React.useEffect(() => {
    if (contentType && influencer?.pricing) {
      const rates = {
        post: influencer.pricing.postRate,
        story: influencer.pricing.storyRate,
        video: influencer.pricing.videoRate,
        collaboration: influencer.pricing.postRate * 3,
      };
      setValue('budget', rates[contentType as keyof typeof rates]);
    }
  }, [contentType, influencer?.pricing, setValue]);

  // Don't render if no influencer data
  if (!influencer) return null;

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      addToast({
        type: 'success',
        title: 'Booking Request Sent!',
        message: 'The influencer will review your request and respond soon.',
      });

      onClose();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Booking Failed',
        message: 'Please try again later.',
      });
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
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
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">
                  Book {influencer.name}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                <Select
                  label="Content Type"
                  options={contentTypes}
                  {...register('contentType')}
                  error={errors.contentType?.message}
                />

                <Input
                  label="Start Date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...register('startDate')}
                  error={errors.startDate?.message}
                  leftIcon={<Calendar className="h-5 w-5" />}
                />

                <Input
                  label="Budget"
                  type="number"
                  {...register('budget', { valueAsNumber: true })}
                  error={errors.budget?.message}
                  leftIcon={<DollarSign className="h-5 w-5" />}
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Project Details
                  </label>
                  <textarea
                    {...register('description')}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Describe your project and requirements..."
                  />
                  {errors.description && (
                    <p className="text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">What's included:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      48-hour response time
                    </li>
                    <li className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Direct communication
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Secure payment protection
                    </li>
                  </ul>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Send Request
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}