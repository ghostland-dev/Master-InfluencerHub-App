import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import InfluencerDashboard from './pages/dashboard/InfluencerDashboard';
import BusinessDashboard from './pages/dashboard/BusinessDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CampaignCreate from './pages/campaigns/CampaignCreate';
import CampaignList from './pages/campaigns/CampaignList';
import CampaignDetails from './pages/campaigns/CampaignDetails';
import Profile from './pages/profile/Profile';
import ViewProfile from './pages/profile/ViewProfile';
import Settings from './pages/settings/Settings';
import Messages from './pages/messages/Messages';
import FindInfluencers from './pages/FindInfluencers';
import ForBusinesses from './pages/ForBusinesses';
import ForInfluencers from './pages/ForInfluencers';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import SuccessStories from './pages/SuccessStories';
import Analytics from './pages/Analytics';
import HelpCenter from './pages/support/HelpCenter';
import ContactUs from './pages/support/ContactUs';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import ToastContainer from './components/ToastContainer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Influencer Routes */}
            <Route
              path="/dashboard/influencer"
              element={
                <ProtectedRoute allowedRoles={['INFLUENCER']}>
                  <InfluencerDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Business Routes */}
            <Route
              path="/dashboard/business"
              element={
                <ProtectedRoute allowedRoles={['BUSINESS']}>
                  <BusinessDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['ADMIN']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Common Routes */}
            <Route
              path="/campaigns"
              element={
                <ProtectedRoute>
                  <CampaignList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/campaigns/create"
              element={
                <ProtectedRoute allowedRoles={['BUSINESS']}>
                  <CampaignCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/campaigns/:id"
              element={
                <ProtectedRoute>
                  <CampaignDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/profile/:id" element={<ViewProfile />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/influencers" element={<FindInfluencers />} />
            <Route path="/businesses" element={<ForBusinesses />} />
            <Route path="/for-influencers" element={<ForInfluencers />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}