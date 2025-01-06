import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['influencer', 'business'], {
    required_error: 'Please select a role',
  }),
});

export const campaignSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
  startDate: z.date().min(new Date(), 'Start date must be in the future'),
  endDate: z.date(),
  requirements: z.array(z.string()).min(1, 'At least one requirement is needed'),
  categories: z.array(z.string()).min(1, 'At least one category is needed'),
}).refine((data) => data.endDate > data.startDate, {
  message: 'End date must be after start date',
  path: ['endDate'],
});

export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().max(500, 'Bio must not exceed 500 characters'),
  socialLinks: z.object({
    instagram: z.string().url().optional(),
    twitter: z.string().url().optional(),
    youtube: z.string().url().optional(),
    tiktok: z.string().url().optional(),
  }),
  categories: z.array(z.string()).min(1, 'At least one category is needed'),
});