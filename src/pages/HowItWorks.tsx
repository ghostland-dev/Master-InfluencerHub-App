import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  Search,
  MessageSquare,
  DollarSign,
  BarChart2,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How InfluenceHub Works
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Simple, transparent, and effective influencer marketing for both brands and creators
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to start collaborating
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: UserPlus,
                title: 'Create Profile',
                description:
                  'Sign up and create your detailed profile with your social media stats and content focus.',
              },
              {
                icon: Search,
                title: 'Discover Opportunities',
                description:
                  'Browse campaigns that match your niche or get automatically matched with relevant brands.',
              },
              {
                icon: MessageSquare,
                title: 'Collaborate',
                description:
                  'Discuss campaign details directly with brands and agree on deliverables.',
              },
              {
                icon: DollarSign,
                title: 'Get Paid',
                description:
                  'Complete campaigns and receive secure payments within 48 hours.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for successful collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Secure Payments',
                description:
                  'All payments are held in escrow and released upon campaign completion.',
                features: [
                  'Secure payment processing',
                  '48-hour payment release',
                  'Transaction history',
                  'Automated invoicing',
                ],
              },
              {
                icon: BarChart2,
                title: 'Analytics Dashboard',
                description:
                  'Track your performance and optimize your campaigns.',
                features: [
                  'Campaign metrics',
                  'Engagement analytics',
                  'Audience insights',
                  'ROI tracking',
                ],
              },
              {
                icon: MessageSquare,
                title: 'Communication Tools',
                description:
                  'Stay connected with brands and manage campaigns efficiently.',
                features: [
                  'Direct messaging',
                  'File sharing',
                  'Campaign briefs',
                  'Collaboration tools',
                ],
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How do I get started?',
                answer:
                  'Simply create an account, complete your profile with your social media statistics and content examples, and start browsing available campaigns.',
              },
              {
                question: 'How much does it cost?',
                answer:
                  'Our platform is free for influencers to join. We only take a small commission when you successfully complete a campaign.',
              },
              {
                question: 'How do payments work?',
                answer:
                  'Payments are held in escrow when a campaign starts and released to you within 48 hours of successful completion.',
              },
              {
                question: 'What kind of support do you offer?',
                answer:
                  'We provide 24/7 customer support, campaign guidance, and dedicated account managers for top performers.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join thousands of successful creators on our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  Create Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}