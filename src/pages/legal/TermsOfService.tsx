import React from 'react';
import { FileText, Shield, AlertCircle, Scale } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-indigo-100">Last updated: March 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-600">
              Welcome to InfluenceHub. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>

          {/* Key Points */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Agreement',
                  description: 'These terms constitute a legally binding agreement.',
                },
                {
                  icon: Shield,
                  title: 'Protection',
                  description: 'We protect both influencers and businesses.',
                },
                {
                  icon: AlertCircle,
                  title: 'Compliance',
                  description: 'Users must comply with all applicable laws.',
                },
                {
                  icon: Scale,
                  title: 'Fair Use',
                  description: 'Platform must be used fairly and responsibly.',
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
              title: '1. Acceptance of Terms',
              content: `By accessing or using the InfluenceHub platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.`,
            },
            {
              title: '2. User Accounts',
              content: `• You must provide accurate and complete information when creating an account
              • You are responsible for maintaining the security of your account
              • You must notify us immediately of any unauthorized access
              • We reserve the right to terminate accounts that violate these terms`,
            },
            {
              title: '3. Platform Rules',
              content: `Users must:
              • Provide accurate information
              • Maintain professional conduct
              • Respect intellectual property rights
              • Follow campaign guidelines
              • Comply with payment terms
              • Protect user privacy`,
            },
            {
              title: '4. Payments and Fees',
              content: `• Platform fees are clearly disclosed
              • Payment terms are specified per campaign
              • Refund policies apply as stated
              • Disputes are handled through our resolution process
              • We may update our fee structure with notice`,
            },
            {
              title: '5. Content Guidelines',
              content: `All content must:
              • Be original or properly licensed
              • Not violate any laws or regulations
              • Not be misleading or fraudulent
              • Follow advertising guidelines
              • Respect intellectual property rights`,
            },
            {
              title: '6. Intellectual Property',
              content: `• Users retain their intellectual property rights
              • Limited license granted for platform use
              • Respect for third-party rights required
              • Infringement will result in account termination`,
            },
            {
              title: '7. Limitation of Liability',
              content: `• We provide the platform "as is"
              • We are not liable for user disputes
              • Force majeure applies
              • Damages are limited as permitted by law`,
            },
            {
              title: '8. Modifications to Terms',
              content: `We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of the platform constitutes acceptance of modified terms.`,
            },
            {
              title: '9. Termination',
              content: `We may terminate or suspend access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`,
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
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-gray-600">
              <li>Email: legal@influencehub.com</li>
              <li>Address: 123 Market St, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}