import React from 'react';
import { Search, Book, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const categories = [
  {
    title: 'Getting Started',
    icon: Book,
    articles: [
      'How to create an account',
      'Setting up your profile',
      'Finding your first campaign',
      'Understanding platform fees',
    ],
  },
  {
    title: 'Campaign Management',
    icon: FileText,
    articles: [
      'Creating a campaign',
      'Setting campaign budgets',
      'Managing deliverables',
      'Campaign analytics',
    ],
  },
  {
    title: 'Payments',
    icon: MessageCircle,
    articles: [
      'Payment methods',
      'Payout schedule',
      'Tax information',
      'Dispute resolution',
    ],
  },
];

const popularArticles = [
  {
    title: 'How to optimize your influencer profile',
    views: '2.5K',
    category: 'Getting Started',
  },
  {
    title: 'Understanding campaign metrics',
    views: '1.8K',
    category: 'Analytics',
  },
  {
    title: 'Payment processing timeline',
    views: '1.5K',
    category: 'Payments',
  },
  {
    title: 'Best practices for campaign success',
    views: '1.2K',
    category: 'Tips & Tricks',
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
          <div className="max-w-2xl mx-auto">
            <Input
              placeholder="Search for articles..."
              leftIcon={<Search className="h-5 w-5" />}
              className="bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <category.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="flex items-center text-gray-600 hover:text-indigo-600"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularArticles.map((article) => (
            <Card key={article.title}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {article.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {article.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{article.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}