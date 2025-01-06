import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import Button from '../../components/ui/Button';
import BookingModal from '../../components/booking/BookingModal';

// Mock data for demonstration
const mockInfluencer = {
  id: '1',
  name: 'Sarah Johnson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  bio: 'Fashion and lifestyle content creator passionate about sustainable fashion',
  location: 'New York, USA',
  stats: {
    followers: '125K',
    engagement: '4.2%',
    completedCampaigns: 24,
  },
  categories: ['Fashion', 'Lifestyle', 'Beauty'],
  pricing: {
    postRate: 1200,
    storyRate: 800,
    videoRate: 2500,
  },
  socialLinks: {
    instagram: 'https://instagram.com/sarahjohnson',
    youtube: 'https://youtube.com/@sarahjohnson',
    tiktok: 'https://tiktok.com/@sarahjohnson',
  },
  recentWork: [
    {
      id: '1',
      title: 'Summer Collection Campaign',
      brand: 'Fashion Co.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    },
    {
      id: '2',
      title: 'Sustainable Fashion',
      brand: 'Eco Wear',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
    },
    {
      id: '3',
      title: 'Beauty Tutorial',
      brand: 'Glow Beauty',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    },
  ],
};

export default function ViewProfile() {
  const { id } = useParams();
  const { openModal } = useBooking();

  const handleBookNow = () => {
    openModal({
      id: mockInfluencer.id,
      name: mockInfluencer.name,
      pricing: mockInfluencer.pricing,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={mockInfluencer.avatar}
              alt={mockInfluencer.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {mockInfluencer.name}
              </h1>
              <p className="text-gray-600 mb-4">{mockInfluencer.bio}</p>
              <div className="flex items-center text-gray-500 mb-6">
                <span className="mr-4">{mockInfluencer.location}</span>
                <span>•</span>
                <span className="mx-4">{mockInfluencer.stats.followers} followers</span>
                <span>•</span>
                <span className="ml-4">{mockInfluencer.stats.engagement} engagement</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {mockInfluencer.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button onClick={handleBookNow}>Book Now</Button>
              <Button variant="outline">Message</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Post Rate</h3>
            <p className="text-2xl font-bold text-indigo-600">
              ${mockInfluencer.pricing.postRate}
            </p>
            <p className="text-gray-500">per post</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Story Rate</h3>
            <p className="text-2xl font-bold text-indigo-600">
              ${mockInfluencer.pricing.storyRate}
            </p>
            <p className="text-gray-500">per story</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Video Rate</h3>
            <p className="text-2xl font-bold text-indigo-600">
              ${mockInfluencer.pricing.videoRate}
            </p>
            <p className="text-gray-500">per video</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Completed Campaigns</h3>
            <p className="text-2xl font-bold text-indigo-600">
              {mockInfluencer.stats.completedCampaigns}
            </p>
            <p className="text-gray-500">successful projects</p>
          </div>
        </div>
      </div>

      {/* Recent Work */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockInfluencer.recentWork.map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{work.title}</h3>
                <p className="text-gray-500">{work.brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Connect</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(mockInfluencer.socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <span className="capitalize">{platform}</span>
            </a>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={useBooking((state) => state.isModalOpen)}
        onClose={useBooking((state) => state.closeModal)}
        influencer={useBooking((state) => state.selectedInfluencer)!}
      />
    </div>
  );
}