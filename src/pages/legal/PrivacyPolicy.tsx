import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-indigo-100">Last updated: March 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-600 mb-4">
              At InfluenceHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </section>

          {/* Key Points */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Data Protection',
                  description: 'We implement robust security measures to protect your personal information.',
                },
                {
                  icon: Lock,
                  title: 'Secure Storage',
                  description: 'Your data is encrypted and stored on secure servers.',
                },
                {
                  icon: Eye,
                  title: 'Transparency',
                  description: 'We\'re clear about how we collect and use your data.',
                },
                {
                  icon: UserCheck,
                  title: 'User Control',
                  description: 'You have control over your personal information and privacy settings.',
                },
              ].map((point) => (
                <div key={point.title} className="flex items-start">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <point.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Sections */}
          {[
            {
              title: '1. Information We Collect',
              content: `We collect information that you provide directly to us, including:
              • Personal information (name, email, phone number)
              • Profile information
              • Payment information
              • Communication data
              • Usage data and analytics`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use the collected information for:
              • Providing and maintaining our services
              • Processing payments
              • Communicating with you
              • Improving our platform
              • Marketing and advertising
              • Legal compliance`,
            },
            {
              title: '3. Information Sharing',
              content: `We may share your information with:
              • Service providers
              • Business partners
              • Legal authorities when required
              • Other users as part of platform functionality
              We never sell your personal information to third parties.`,
            },
            {
              title: '4. Your Rights',
              content: `You have the right to:
              • Access your personal information
              • Correct inaccurate data
              • Request deletion of your data
              • Opt-out of marketing communications
              • Export your data`,
            },
            {
              title: '5. Data Security',
              content: `We implement appropriate security measures to protect your information, including:
              • Encryption of sensitive data
              • Regular security assessments
              • Access controls
              • Secure data storage`,
            },
            {
              title: '6. International Data Transfers',
              content: `We may transfer your data internationally. When we do, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws.`,
            },
            {
              title: '7. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`,
            },
          ].map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-600 whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}

          {/* Contact Information */}
          <section className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-gray-600">
              <li>Email: privacy@influencehub.com</li>
              <li>Address: 123 Market St, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}