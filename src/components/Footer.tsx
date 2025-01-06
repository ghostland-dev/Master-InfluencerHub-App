import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">InfluenceHub</span>
            </div>
            <p className="text-gray-400">
              Connecting influencers with brands for impactful collaborations.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Influencers</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How it Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
              <li><Link to="/for-influencers" className="text-gray-400 hover:text-white">For Influencers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Businesses</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/influencers" className="text-gray-400 hover:text-white">Find Influencers</Link></li>
              <li><Link to="/businesses" className="text-gray-400 hover:text-white">For Businesses</Link></li>
              <li><Link to="/analytics" className="text-gray-400 hover:text-white">Analytics</Link></li>
              <li><Link to="/campaigns" className="text-gray-400 hover:text-white">Campaign Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} InfluenceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}