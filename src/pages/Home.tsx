import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users, BarChart, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedText from '../components/ui/AnimatedText';
import AnimatedCard from '../components/ui/AnimatedCard';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Connect. Create. Grow.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-indigo-100 max-w-3xl mx-auto">
              Join the next generation of influencer marketing. Connect with brands that share your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Creators', value: '10,000+' },
              { label: 'Brands', value: '5,000+' },
              { label: 'Campaigns', value: '25,000+' },
              { label: 'Success Rate', value: '94%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-indigo-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose InfluenceHub?
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to run successful influencer campaigns
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Smart Matching',
                description: 'AI-powered algorithm to find the perfect influencers for your brand',
              },
              {
                icon: Shield,
                title: 'Verified Profiles',
                description: 'All influencers are verified to ensure authenticity and quality',
              },
              {
                icon: BarChart,
                title: 'Real-time Analytics',
                description: 'Track campaign performance and ROI with detailed analytics',
              },
              {
                icon: TrendingUp,
                title: 'Secure Payments',
                description: 'Automated payments and invoicing for seamless transactions',
              },
            ].map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.1}>
                <div className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                  <div className="mt-4">
                    <Link
                      to="/how-it-works"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-lg p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-indigo-100">
                Join thousands of successful influencers and brands on InfluenceHub
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
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}