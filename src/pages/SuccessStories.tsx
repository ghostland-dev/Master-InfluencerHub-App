import React from 'react';
import { Star, TrendingUp, BarChart2, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';

const successStories = [
  {
    type: 'influencer',
    name: 'Sarah Johnson',
    role: 'Fashion & Lifestyle Influencer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    metrics: {
      growth: '+245%',
      earnings: '$25K/month',
      campaigns: '48',
    },
    brands: ['Nike', 'Sephora', 'FashionNova'],
    quote: 'InfluenceHub transformed my passion into a thriving business. The platform\'s tools and analytics helped me grow my audience and secure partnerships with dream brands.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
  },
  {
    type: 'brand',
    name: 'TechGear Pro',
    role: 'Consumer Electronics',
    avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    metrics: {
      roi: '380%',
      reach: '2.5M',
      engagement: '4.8%',
    },
    campaign: 'Product Launch Campaign',
    quote: 'We achieved a 380% ROI on our product launch campaign. The platform\'s targeting capabilities helped us find the perfect tech influencers for our brand.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
  },
  {
    type: 'influencer',
    name: 'Mike Chen',
    role: 'Tech Reviewer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    metrics: {
      growth: '+180%',
      earnings: '$35K/month',
      campaigns: '36',
    },
    brands: ['Samsung', 'Intel', 'Razer'],
    quote: 'The analytics tools and campaign management features helped me optimize my content strategy and grow my channel significantly.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Real results from real creators and brands using our platform
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                label: 'Active Users',
                value: '50,000+',
                color: 'text-blue-600',
              },
              {
                icon: TrendingUp,
                label: 'Average Growth',
                value: '185%',
                color: 'text-green-600',
              },
              {
                icon: BarChart2,
                label: 'Campaign ROI',
                value: '320%',
                color: 'text-purple-600',
              },
              {
                icon: Star,
                label: 'Success Rate',
                value: '94%',
                color: 'text-yellow-600',
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
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar
                      src={story.avatar}
                      name={story.name}
                      size="lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">{story.role}</p>
                    </div>
                  </div>

                  <blockquote className="text-xl text-gray-600 italic">
                    "{story.quote}"
                  </blockquote>

                  <div className="grid grid-cols-3 gap-4">
                    {story.type === 'influencer' ? (
                      <>
                        <div>
                          <p className="text-sm text-gray-500">Growth</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.growth}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Monthly Earnings</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.earnings}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Campaigns</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.campaigns}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm text-gray-500">ROI</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.roi}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Reach</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.reach}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Engagement</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.metrics.engagement}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {story.type === 'influencer' && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Top Brand Collaborations</p>
                      <div className="flex flex-wrap gap-2">
                        {story.brands.map((brand) => (
                          <span
                            key={brand}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands who are growing their business with InfluenceHub
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}