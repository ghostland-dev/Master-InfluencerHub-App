import React from 'react';
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Get in touch via email',
    contact: 'support@influencehub.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm',
    contact: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Visit our office',
    contact: '123 Market St, San Francisco, CA 94105',
  },
];

const topics = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'billing', label: 'Billing Question' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'feedback', label: 'Platform Feedback' },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100">
            We're here to help and answer any question you might have
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method) => (
              <Card key={method.title}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <method.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {method.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        {method.description}
                      </p>
                      <p className="text-indigo-600 font-medium">
                        {method.contact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="Enter your name"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <Select
                    label="Topic"
                    options={topics}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="/privacy" className="text-indigo-600 hover:text-indigo-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find quick answers to common questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: 'How quickly can I expect a response?',
              answer: 'We typically respond to all inquiries within 24 hours during business days.',
            },
            {
              question: 'Do you offer phone support?',
              answer: 'Yes, phone support is available Monday through Friday, 8am to 5pm PT.',
            },
            {
              question: 'Can I schedule a demo?',
              answer: 'Absolutely! You can schedule a demo through our sales team.',
            },
            {
              question: 'Where are you located?',
              answer: 'Our main office is in San Francisco, with support teams worldwide.',
            },
          ].map((faq) => (
            <Card key={faq.question}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}