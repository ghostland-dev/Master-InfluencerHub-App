import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const billingOptions = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annual', label: 'Annual' },
] as const;

type BillingCycle = typeof billingOptions[number]['value'];

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    price: { monthly: 0, annual: 0 },
    features: [
      'Basic profile customization',
      'Up to 5 active campaigns',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    description: 'Best for growing businesses',
    price: { monthly: 49, annual: 470 },
    features: [
      'Everything in Free, plus:',
      'Advanced profile customization',
      'Unlimited campaigns',
      'Priority support',
      'Advanced analytics',
      'Campaign performance insights',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: { monthly: 99, annual: 950 },
    features: [
      'Everything in Pro, plus:',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced reporting',
      'API access',
      'SLA guarantees',
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Choose the perfect plan for your business
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-1">
            {billingOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setBillingCycle(option.value)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === option.value
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {option.label}
                {option.value === 'annual' && billingCycle === 'annual' && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? 'border-2 border-indigo-600 shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-600 py-1 px-3 text-sm font-medium text-white text-center">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-500 mt-2">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/register"
                  className="block w-full"
                >
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-8">
          {[
            {
              question: 'What payment methods do you accept?',
              answer:
                'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
            },
            {
              question: 'Can I change plans later?',
              answer:
                'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
            },
            {
              question: 'Is there a free trial?',
              answer:
                'Yes, all paid plans come with a 14-day free trial. No credit card required.',
            },
            {
              question: 'What happens when I upgrade or downgrade?',
              answer:
                'When you upgrade, you\'ll get immediate access to new features. When downgrading, you\'ll retain access to your current features until the end of your billing period.',
            },
          ].map((faq) => (
            <Card key={faq.question}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team for a custom quote or to learn more about our Enterprise solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact">
              <Button size="lg">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}