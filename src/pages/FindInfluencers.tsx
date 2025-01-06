import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Users, TrendingUp, BarChart2, Instagram, Youtube, Twitter, Hash, Sliders, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import { formatCurrency } from '../lib/utils';

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'beauty', label: 'Beauty & Cosmetics' },
  { value: 'tech', label: 'Technology' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'travel', label: 'Travel' },
  { value: 'fitness', label: 'Fitness & Health' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'business', label: 'Business' },
  { value: 'education', label: 'Education' },
  { value: 'entertainment', label: 'Entertainment' },
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
];

const followerRanges = [
  { value: 'all', label: 'Any Following' },
  { value: '10k-50k', label: '10K - 50K' },
  { value: '50k-100k', label: '50K - 100K' },
  { value: '100k-500k', label: '100K - 500K' },
  { value: '500k-1m', label: '500K - 1M' },
  { value: '1m+', label: '1M+' },
];

const priceRanges = [
  { value: 'all', label: 'Any Budget' },
  { value: '0-500', label: '$0 - $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000+', label: '$5,000+' },
];

const platforms = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'twitter', label: 'Twitter' },
];

const mockInfluencers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'Fashion & Style',
    location: 'New York, USA',
    bio: 'Fashion and lifestyle content creator passionate about sustainable fashion',
    followers: {
      instagram: '125K',
      youtube: '50K',
      tiktok: '200K',
    },
    engagement: '4.2%',
    averageReach: '15K',
    collaborations: 24,
    priceRange: '$1,000 - $2,500',
    tags: ['Fashion', 'Lifestyle', 'Sustainable'],
    verified: true,
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    category: 'Technology',
    location: 'San Francisco, USA',
    bio: 'Tech reviewer and gadget enthusiast. Sharing honest reviews and tech tips',
    followers: {
      youtube: '500K',
      twitter: '80K',
    },
    engagement: '3.8%',
    averageReach: '50K',
    collaborations: 56,
    priceRange: '$2,500 - $5,000',
    tags: ['Tech Reviews', 'Gadgets', 'Gaming'],
    verified: true,
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    category: 'Beauty & Cosmetics',
    location: 'Los Angeles, USA',
    bio: 'Beauty expert sharing makeup tutorials and skincare tips',
    followers: {
      instagram: '300K',
      youtube: '250K',
      tiktok: '500K',
    },
    engagement: '5.1%',
    averageReach: '35K',
    collaborations: 89,
    priceRange: '$3,000 - $7,500',
    tags: ['Beauty', 'Makeup', 'Skincare'],
    verified: true,
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    category: 'Food & Cooking',
    location: 'Chicago, USA',
    bio: 'Food blogger and chef sharing recipes and cooking tips',
    followers: {
      instagram: '180K',
      youtube: '320K',
      tiktok: '400K',
    },
    engagement: '4.7%',
    averageReach: '25K',
    collaborations: 42,
    priceRange: '$1,500 - $3,000',
    tags: ['Food', 'Cooking', 'Recipes'],
    verified: true,
  },
  {
    id: '5',
    name: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    category: 'Fitness & Health',
    location: 'Miami, USA',
    bio: 'Certified fitness trainer and wellness coach',
    followers: {
      instagram: '220K',
      youtube: '150K',
      tiktok: '300K',
    },
    engagement: '4.5%',
    averageReach: '30K',
    collaborations: 35,
    priceRange: '$2,000 - $4,000',
    tags: ['Fitness', 'Wellness', 'Health'],
    verified: true,
  },
];

export default function FindInfluencers() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedFollowers, setSelectedFollowers] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find the Perfect Influencer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with top influencers across various niches and create impactful campaigns
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="space-y-6">
          {/* Main Search */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search by name, category, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="h-5 w-5 text-gray-400" />}
            />
            <Select
              options={categories}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <Button
              leftIcon={<Filter className="h-5 w-5" />}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select
                  options={locations}
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Followers
                </label>
                <Select
                  options={followerRanges}
                  value={selectedFollowers}
                  onChange={(e) => setSelectedFollowers(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <Select
                  options={priceRanges}
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platforms
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <Button
                      key={platform.value}
                      variant={selectedPlatforms.includes(platform.value) ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => togglePlatform(platform.value)}
                    >
                      {platform.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            icon: Users,
            label: 'Active Influencers',
            value: '10,000+',
            color: 'text-blue-600',
          },
          {
            icon: TrendingUp,
            label: 'Average Engagement',
            value: '4.5%',
            color: 'text-green-600',
          },
          {
            icon: BarChart2,
            label: 'Successful Campaigns',
            value: '25,000+',
            color: 'text-purple-600',
          },
          {
            icon: DollarSign,
            label: 'Average ROI',
            value: '320%',
            color: 'text-indigo-600',
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 bg-gray-100 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Influencer List */}
      <div className="grid gap-6">
        {mockInfluencers.map((influencer) => (
          <Card key={influencer.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <Avatar
                  src={influencer.avatar}
                  name={influencer.name}
                  size="lg"
                  className="h-20 w-20"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {influencer.name}
                        </h3>
                        {influencer.verified && (
                          <Badge variant="success">Verified</Badge>
                        )}
                      </div>
                      <p className="text-gray-600">{influencer.location}</p>
                    </div>
                    <Link to={`/profile/${influencer.id}`}>
                      <Button>View Profile</Button>
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-4">{influencer.bio}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Followers</p>
                      <div className="flex items-center space-x-4">
                        {influencer.followers.instagram && (
                          <div className="flex items-center">
                            <Instagram className="h-4 w-4 mr-1" />
                            <span className="font-medium">
                              {influencer.followers.instagram}
                            </span>
                          </div>
                        )}
                        {influencer.followers.youtube && (
                          <div className="flex items-center">
                            <Youtube className="h-4 w-4 mr-1" />
                            <span className="font-medium">
                              {influencer.followers.youtube}
                            </span>
                          </div>
                        )}
                        {influencer.followers.tiktok && (
                          <div className="flex items-center">
                            <Hash className="h-4 w-4 mr-1" />
                            <span className="font-medium">
                              {influencer.followers.tiktok}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Engagement Rate</p>
                      <p className="font-medium">{influencer.engagement}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Collaborations</p>
                      <p className="font-medium">{influencer.collaborations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="font-medium">{influencer.priceRange}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {influencer.tags.map((tag, index) => (
                      <Badge key={index} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}