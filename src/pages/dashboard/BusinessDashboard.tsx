import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  MessageSquare, 
  DollarSign, 
  Users, 
  Search, 
  Calendar, 
  Settings, 
  Bell, 
  TrendingUp,
  Filter,
  ArrowRight,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import { formatCurrency } from '../../lib/utils';
import { motion } from 'framer-motion';

const mockData = {
  stats: {
    budget: {
      total: 45000,
      remaining: 15000,
      spent: 30000,
      roi: 320,
    },
    campaigns: {
      active: 12,
      completed: 24,
      pending: 5,
      successRate: 85,
    },
    influencers: {
      total: 48,
      active: 32,
      newThisMonth: 5,
      averageEngagement: 4.8,
    },
    reach: {
      total: '2.4M',
      growth: 12,
      impressions: '450K',
      engagement: '4.8%',
    },
  },
  activeCampaigns: [
    {
      id: '1',
      title: 'Summer Collection Launch',
      progress: 75,
      budget: 12000,
      reach: '450K',
      engagement: '4.8%',
      influencers: 8,
      dueDate: '2024-06-30',
    },
    {
      id: '2',
      title: 'Brand Awareness Campaign',
      progress: 45,
      budget: 8000,
      reach: '280K',
      engagement: '3.9%',
      influencers: 5,
      dueDate: '2024-07-15',
    },
    {
      id: '3',
      title: 'Product Launch',
      progress: 90,
      budget: 15000,
      reach: '620K',
      engagement: '5.2%',
      influencers: 12,
      dueDate: '2024-06-15',
    },
  ],
  topInfluencers: [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      category: 'Fashion & Lifestyle',
      followers: '125K',
      engagement: '4.2%',
      campaigns: 8,
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      category: 'Tech & Gaming',
      followers: '250K',
      engagement: '3.8%',
      campaigns: 6,
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      category: 'Beauty & Wellness',
      followers: '180K',
      engagement: '4.5%',
      campaigns: 5,
    },
  ],
  recentActivity: [
    {
      id: '1',
      type: 'campaign_update',
      message: 'Summer Collection campaign reached 75% completion',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      type: 'influencer_joined',
      message: 'New influencer joined your Brand Awareness campaign',
      timestamp: '4 hours ago',
    },
    {
      id: '3',
      type: 'milestone_reached',
      message: 'Product Launch campaign exceeded engagement targets',
      timestamp: '1 day ago',
    },
  ],
};

export default function BusinessDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Business Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/campaigns/create">
                <Button leftIcon={<Plus className="h-5 w-5" />}>
                  New Campaign
                </Button>
              </Link>
              <Link to="/influencers">
                <Button variant="outline" leftIcon={<Search className="h-5 w-5" />}>
                  Find Influencers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Campaign Budget</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(mockData.stats.budget.total)}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Remaining</span>
                    <span className="text-green-600 font-medium">
                      {formatCurrency(mockData.stats.budget.remaining)}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${(mockData.stats.budget.spent / mockData.stats.budget.total) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {mockData.stats.campaigns.active}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Success Rate</span>
                    <p className="font-medium text-blue-600">{mockData.stats.campaigns.successRate}%</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Completed</span>
                    <p className="font-medium">{mockData.stats.campaigns.completed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Influencer Network</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {mockData.stats.influencers.total}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Active</span>
                    <p className="font-medium">{mockData.stats.influencers.active}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">New This Month</span>
                    <p className="font-medium text-purple-600">+{mockData.stats.influencers.newThisMonth}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Reach</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {mockData.stats.reach.total}
                    </p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Growth</span>
                    <p className="font-medium text-orange-600">+{mockData.stats.reach.growth}%</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Engagement</span>
                    <p className="font-medium">{mockData.stats.reach.engagement}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Campaigns */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <CardTitle>Active Campaigns</CardTitle>
                <Link to="/campaigns">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockData.activeCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {campaign.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Due {new Date(campaign.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="success">Active</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium">{campaign.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-indigo-600 rounded-full"
                            style={{ width: `${campaign.progress}%` }}
                          />
                        </div>

                        <div className="grid grid-cols-4 gap-4 pt-2">
                          <div>
                            <p className="text-xs text-gray-500">Budget</p>
                            <p className="font-medium">{formatCurrency(campaign.budget)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Reach</p>
                            <p className="font-medium">{campaign.reach}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Engagement</p>
                            <p className="font-medium">{campaign.engagement}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Influencers</p>
                            <p className="font-medium">{campaign.influencers}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        {activity.type === 'campaign_update' ? (
                          <BarChart3 className="h-5 w-5 text-indigo-600" />
                        ) : activity.type === 'influencer_joined' ? (
                          <Users className="h-5 w-5 text-indigo-600" />
                        ) : (
                          <TrendingUp className="h-5 w-5 text-indigo-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Influencers */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Top Performing Influencers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockData.topInfluencers.map((influencer) => (
                    <div
                      key={influencer.id}
                      className="flex items-center space-x-4"
                    >
                      <Avatar
                        src={influencer.avatar}
                        name={influencer.name}
                        size="lg"
                      />
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/profile/${influencer.id}`}
                          className="text-sm font-medium text-gray-900 hover:text-indigo-600"
                        >
                          {influencer.name}
                        </Link>
                        <p className="text-sm text-gray-500">{influencer.category}</p>
                        <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                          <span>{influencer.followers} followers</span>
                          <span>{influencer.engagement} engagement</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {influencer.campaigns}
                        </p>
                        <p className="text-xs text-gray-500">campaigns</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => navigate('/influencers')}
                >
                  View All Influencers
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/campaigns/create">
                    <Button className="w-full justify-start" leftIcon={<Plus className="h-5 w-5" />}>
                      Create Campaign
                    </Button>
                  </Link>
                  <Link to="/messages">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      leftIcon={<MessageSquare className="h-5 w-5" />}
                    >
                      Message Influencers
                    </Button>
                  </Link>
                  <Link to="/analytics">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      leftIcon={<BarChart3 className="h-5 w-5" />}
                    >
                      View Analytics
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      leftIcon={<Settings className="h-5 w-5" />}
                    >
                      Account Settings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}