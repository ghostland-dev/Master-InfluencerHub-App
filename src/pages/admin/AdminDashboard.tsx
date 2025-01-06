import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Building2,
  BarChart2,
  DollarSign,
  Settings,
  Shield,
  Bell,
  AlertTriangle,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { formatCurrency } from '../../lib/utils';

// Mock data for demonstration
const platformStats = {
  users: {
    total: 15420,
    growth: '+12.5%',
    influencers: 10500,
    businesses: 4920,
  },
  revenue: {
    monthly: 125000,
    growth: '+15.3%',
    arpu: 82,
    mrr: 98000,
  },
  campaigns: {
    active: 1250,
    completed: 4500,
    totalValue: 2500000,
    successRate: '94%',
  },
  system: {
    uptime: '99.99%',
    responseTime: '145ms',
    errorRate: '0.02%',
    activeUsers: 2500,
  },
};

const recentAlerts = [
  {
    id: '1',
    type: 'security',
    message: 'Multiple failed login attempts detected',
    severity: 'high',
    timestamp: '10 minutes ago',
  },
  {
    id: '2',
    type: 'performance',
    message: 'API response time spike detected',
    severity: 'medium',
    timestamp: '25 minutes ago',
  },
  {
    id: '3',
    type: 'system',
    message: 'Database backup completed successfully',
    severity: 'low',
    timestamp: '1 hour ago',
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-500">Platform Overview and Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/admin/settings')}
                leftIcon={<Settings className="h-5 w-5" />}
              >
                Settings
              </Button>
              <Button
                onClick={() => navigate('/admin/security')}
                leftIcon={<Shield className="h-5 w-5" />}
              >
                Security Center
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {platformStats.users.total.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-green-600 text-sm font-medium">
                  {platformStats.users.growth}
                </span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">
                  Influencers: {platformStats.users.influencers.toLocaleString()}
                </div>
                <div className="text-gray-500">
                  Businesses: {platformStats.users.businesses.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(platformStats.revenue.monthly)}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-green-600 text-sm font-medium">
                  {platformStats.revenue.growth}
                </span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">
                  ARPU: {formatCurrency(platformStats.revenue.arpu)}
                </div>
                <div className="text-gray-500">
                  MRR: {formatCurrency(platformStats.revenue.mrr)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {platformStats.campaigns.active.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-purple-600 text-sm font-medium">
                  {platformStats.campaigns.successRate}
                </span>
                <span className="text-gray-500 text-sm ml-2">success rate</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">
                  Completed: {platformStats.campaigns.completed.toLocaleString()}
                </div>
                <div className="text-gray-500">
                  Value: {formatCurrency(platformStats.campaigns.totalValue)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Status</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {platformStats.system.uptime}
                  </p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Activity className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-gray-500 text-sm">
                  Response Time: {platformStats.system.responseTime}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">
                  Error Rate: {platformStats.system.errorRate}
                </div>
                <div className="text-gray-500">
                  Active: {platformStats.system.activeUsers.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/users')}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Manage Users
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/campaigns')}
                >
                  <BarChart2 className="h-5 w-5 mr-2" />
                  Review Campaigns
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/reports')}
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Generate Reports
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/notifications')}
                >
                  <Bell className="h-5 w-5 mr-2" />
                  Send Notifications
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Alerts
              </h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        alert.severity === 'high'
                          ? 'bg-red-100'
                          : alert.severity === 'medium'
                          ? 'bg-yellow-100'
                          : 'bg-green-100'
                      }`}
                    >
                      <AlertTriangle
                        className={`h-5 w-5 ${
                          alert.severity === 'high'
                            ? 'text-red-600'
                            : alert.severity === 'medium'
                            ? 'text-yellow-600'
                            : 'text-green-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {alert.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {alert.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => navigate('/admin/alerts')}
              >
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Metrics
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'API Response Time',
                    value: '145ms',
                    change: '-12ms',
                    trend: 'positive',
                  },
                  {
                    label: 'Database Load',
                    value: '42%',
                    change: '+5%',
                    trend: 'neutral',
                  },
                  {
                    label: 'Cache Hit Rate',
                    value: '94%',
                    change: '+2%',
                    trend: 'positive',
                  },
                  {
                    label: 'Error Rate',
                    value: '0.02%',
                    change: '-0.01%',
                    trend: 'positive',
                  },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {metric.label}
                      </p>
                      <p className="text-xs text-gray-500">{metric.value}</p>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        metric.trend === 'positive'
                          ? 'text-green-600'
                          : metric.trend === 'negative'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => navigate('/admin/metrics')}
              >
                View Detailed Metrics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}