import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  DollarSign,
  BarChart2,
  Users,
  Shield,
  Target,
  MessageSquare,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ForInfluencers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Grow Your Influence, Amplify Your Income
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Connect with leading brands, manage campaigns efficiently, and monetize your influence on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-50"
                  >
                    Join as Influencer
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Active Brands', value: '5,000+' },
                { label: 'Avg. Campaign Value', value: '$2,500' },
                { label: 'Monthly Earnings', value: '$5K+' },
                { label: 'Payment Speed', value: '48h' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-indigo-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as an influencer in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Competitive Earnings',
                description:
                  'Set your own rates and earn more with our industry-leading commission structure.',
              },
              {
                icon: Shield,
                title: 'Secure Payments',
                description:
                  'Get paid reliably within 48 hours of completing campaigns.',
              },
              {
                icon: Target,
                title: 'Brand Matching',
                description:
                  'Get matched with brands that align with your values and content style.',
              },
              {
                icon: MessageSquare,
                title: 'Direct Communication',
                description:
                  'Chat directly with brands and negotiate terms easily.',
              },
              {
                icon: BarChart2,
                title: 'Performance Analytics',
                description:
                  'Track your growth and campaign performance with detailed insights.',
              },
              {
                icon: Award,
                title: 'Exclusive Opportunities',
                description:
                  'Access VIP campaigns and special partnerships with top brands.',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from influencers who've grown their careers with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Chen',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                role: 'Tech Influencer',
                stats: {
                  earnings: '$15K/month',
                  growth: '+125%',
                  campaigns: '45+',
                },
                quote:
                  'The platform helped me turn my passion for tech into a full-time career.',
              },
              {
                name: 'Sarah Williams',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                role: 'Lifestyle Creator',
                stats: {
                  earnings: '$20K/month',
                  growth: '+200%',
                  campaigns: '60+',
                },
                quote:
                  'I\'ve collaborated with my dream brands and doubled my income.',
              },
              {
                name: 'Marcus Johnson',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                role: 'Fitness Expert',
                stats: {
                  earnings: '$25K/month',
                  growth: '+150%',
                  campaigns: '38+',
                },
                quote:
                  'The analytics tools helped me optimize my content and grow faster.',
              },
            ].map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {story.name}
                      </h3>
                      <p className="text-gray-600">{story.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Monthly</p>
                      <p className="font-semibold">{story.stats.earnings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Growth</p>
                      <p className="font-semibold">{story.stats.growth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Campaigns</p>
                      <p className="font-semibold">{story.stats.campaigns}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join thousands of successful influencers on our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  Create Your Profile
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}