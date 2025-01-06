import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Menu, X } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import NotificationBell from './notifications/NotificationBell';
import Avatar from './ui/Avatar';

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Get dashboard link based on user role
  const getDashboardLink = () => {
    if (!user) return null;
    switch (user.role) {
      case 'ADMIN':
        return '/admin';
      case 'INFLUENCER':
        return '/dashboard/influencer';
      case 'BUSINESS':
        return '/dashboard/business';
      default:
        return null;
    }
  };

  const dashboardLink = getDashboardLink();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">InfluenceHub</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/influencers" className="text-gray-600 hover:text-gray-900">
              {t('navigation.forInfluencers')}
            </Link>
            <Link to="/businesses" className="text-gray-600 hover:text-gray-900">
              {t('navigation.forBusinesses')}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                {dashboardLink && (
                  <Link to={dashboardLink} className="text-gray-600 hover:text-gray-900">
                    {t('navigation.dashboard')}
                  </Link>
                )}
                <NotificationBell />
                <Link to="/messages" className="text-gray-600 hover:text-gray-900">
                  {t('navigation.messages')}
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2"
                    onBlur={() => setTimeout(() => setShowProfileMenu(false), 200)}
                  >
                    <Avatar
                      src={user.avatar || undefined}
                      name={user.name}
                      size="sm"
                    />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('navigation.profile')}
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('navigation.settings')}
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('navigation.signOut')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {t('navigation.register')}
                </Link>
              </div>
            )}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/influencers"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {t('navigation.forInfluencers')}
            </Link>
            <Link
              to="/businesses"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {t('navigation.forBusinesses')}
            </Link>
            {user ? (
              <>
                {dashboardLink && (
                  <Link
                    to={dashboardLink}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {t('navigation.dashboard')}
                  </Link>
                )}
                <Link
                  to="/messages"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t('navigation.messages')}
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t('navigation.profile')}
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t('navigation.settings')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t('navigation.signOut')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {t('navigation.register')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}