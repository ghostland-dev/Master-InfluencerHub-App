import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Camera, Link as LinkIcon, Mail, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio must not exceed 500 characters'),
  instagram: z.string().url().optional().or(z.literal('')),
  twitter: z.string().url().optional().or(z.literal('')),
  youtube: z.string().url().optional().or(z.literal('')),
  tiktok: z.string().url().optional().or(z.literal('')),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const mockProfile = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  bio: 'Fashion and lifestyle content creator with a passion for sustainable fashion. Based in New York City.',
  socialLinks: {
    instagram: 'https://instagram.com/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
    youtube: '',
    tiktok: 'https://tiktok.com/@sarahjohnson',
  },
  stats: {
    followers: '125K',
    engagementRate: '4.2%',
    campaignsCompleted: 24,
  },
};

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: mockProfile.name,
      email: mockProfile.email,
      bio: mockProfile.bio,
      ...mockProfile.socialLinks,
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      console.log('Profile data:', data);
      // Handle profile update logic here
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <div className="px-6 pb-6">
            <div className="relative flex items-end -mt-12 mb-4">
              <Avatar
                src={mockProfile.avatar}
                name={mockProfile.name}
                size="lg"
                className="h-24 w-24 border-4 border-white"
              />
              <Button
                size="sm"
                variant="outline"
                className="ml-4 mb-2"
                leftIcon={<Camera className="h-4 w-4" />}
              >
                Change Photo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">{mockProfile.stats.followers}</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{mockProfile.stats.engagementRate}</p>
                <p className="text-sm text-gray-500">Engagement Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{mockProfile.stats.campaignsCompleted}</p>
                <p className="text-sm text-gray-500">Campaigns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  {...register('name')}
                  error={errors.name?.message}
                  leftIcon={<User className="h-5 w-5 text-gray-400" />}
                />
                <Input
                  label="Email"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  leftIcon={<Mail className="h-5 w-5 text-gray-400" />}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  {...register('bio')}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  rows={4}
                  placeholder="Tell us about yourself"
                />
                {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Social Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Instagram"
                    {...register('instagram')}
                    error={errors.instagram?.message}
                    leftIcon={<LinkIcon className="h-5 w-5 text-gray-400" />}
                    placeholder="https://instagram.com/username"
                  />
                  <Input
                    label="Twitter"
                    {...register('twitter')}
                    error={errors.twitter?.message}
                    leftIcon={<LinkIcon className="h-5 w-5 text-gray-400" />}
                    placeholder="https://twitter.com/username"
                  />
                  <Input
                    label="YouTube"
                    {...register('youtube')}
                    error={errors.youtube?.message}
                    leftIcon={<LinkIcon className="h-5 w-5 text-gray-400" />}
                    placeholder="https://youtube.com/channel"
                  />
                  <Input
                    label="TikTok"
                    {...register('tiktok')}
                    error={errors.tiktok?.message}
                    leftIcon={<LinkIcon className="h-5 w-5 text-gray-400" />}
                    placeholder="https://tiktok.com/@username"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" isLoading={isSubmitting}>
                Save Changes
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}