import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Target,
  BarChart2,
  Users,
  Search,
  MessageSquare,
  PieChart,
  Shield,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScheduleDemoButton from '../components/demo/ScheduleDemoButton';

export default function ForBusinesses() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Brand with Influencer Marketing
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Connect with authentic creators who align with your brand values and reach millions of engaged followers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-50"
                  >
                    Get Started
                  </Button>
                </Link>
                <ScheduleDemoButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Active Influencers', value: '10,000+' },
                { label: 'Avg. Engagement Rate', value: '4.5%' },
                { label: 'Total Reach', value: '50M+' },
                { label: 'Successful Campaigns', value: '25,000+' },
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

      {/* Rest of the code remains the same until the CTA Section */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join thousands of successful brands using our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  Get Started Now
                </Button>
              </Link>
              <ScheduleDemoButton
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}