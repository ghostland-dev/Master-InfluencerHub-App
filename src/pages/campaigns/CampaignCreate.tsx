import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, DollarSign, ListChecks, Tags } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Select from '../../components/ui/Select';

const campaignSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  requirements: z.string().min(1, 'Requirements are required'),
  category: z.string().min(1, 'Category is required'),
});

type CampaignFormData = z.infer<typeof campaignSchema>;

const categories = [
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'beauty', label: 'Beauty & Cosmetics' },
  { value: 'tech', label: 'Technology & Gadgets' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'travel', label: 'Travel & Adventure' },
  { value: 'fitness', label: 'Fitness & Health' },
  { value: 'gaming', label: 'Gaming & Entertainment' },
];

export default function CampaignCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
  });

  const onSubmit = async (data: CampaignFormData) => {
    try {
      // Handle campaign creation logic here
      console.log('Campaign data:', data);
    } catch (error) {
      console.error('Failed to create campaign:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Campaign</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <Input
              label="Campaign Title"
              {...register('title')}
              error={errors.title?.message}
              placeholder="Enter campaign title"
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register('description')}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                rows={4}
                placeholder="Describe your campaign requirements and goals"
              />
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Budget"
                type="number"
                leftIcon={<DollarSign className="h-5 w-5 text-gray-400" />}
                {...register('budget', { valueAsNumber: true })}
                error={errors.budget?.message}
                placeholder="Enter campaign budget"
              />

              <Select
                label="Category"
                options={categories}
                {...register('category')}
                error={errors.category?.message}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Start Date"
                type="date"
                leftIcon={<Calendar className="h-5 w-5 text-gray-400" />}
                {...register('startDate')}
                error={errors.startDate?.message}
              />

              <Input
                label="End Date"
                type="date"
                leftIcon={<Calendar className="h-5 w-5 text-gray-400" />}
                {...register('endDate')}
                error={errors.endDate?.message}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                {...register('requirements')}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                rows={4}
                placeholder="List your specific requirements for influencers"
              />
              {errors.requirements && (
                <p className="text-sm text-red-600">{errors.requirements.message}</p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Create Campaign
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}