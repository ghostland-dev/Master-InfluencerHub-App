import React from 'react';
import {
  TrendingUp,
  Users,
  BarChart2,
  Clock,
  Activity,
  DollarSign,
  Heart,
  AlertCircle,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { formatCurrency } from '../lib/utils';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Revenue',
              value: formatCurrency(125000),
              change: '+12.5%',
              icon: DollarSign,
              color: 'text-green-600',
            },
            {
              title: 'Active Campaigns',
              value: '24',
              change: '+3',
              icon: Activity,
              color: 'text-blue-600',
            },
            {
              title: 'Total Reach',
              value: '2.4M',
              change: '+15.3%',
              icon: Users,
              color: 'text-purple-600',
            },
            {
              title: 'Avg. Engagement',
              value: '4.7%',
              change: '+0.8%',
              icon: Heart,
              color: 'text-red-600',
            },
          ].map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-gray-100 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`text-sm ${stat.color} font-medium`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: 'Summer Collection',
                    progress: 75,
                    status: 'Active',
                    reach: '450K',
                    engagement: '4.8%',
                  },
                  {
                    name: 'Product Launch',
                    progress: 45,
                    status: 'Active',
                    reach: '280K',
                    engagement: '3.9%',
                  },
                  {
                    name: 'Brand Awareness',
                    progress: 90,
                    status: 'Completed',
                    reach: '620K',
                    engagement: '5.2%',
                  },
                ].map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{campaign.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Reach: {campaign.reach}</span>
                          <span>Engagement: {campaign.engagement}</span>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          campaign.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audience Demographics */}
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { label: 'Age Range', data: '18-34 (65%)', icon: Users },
                  { label: 'Gender', data: 'Female (58%), Male (42%)', icon: Users },
                  { label: 'Top Locations', data: 'US (45%), UK (15%), CA (12%)', icon: TrendingUp },
                  { label: 'Interests', data: 'Fashion, Tech, Lifestyle', icon: Heart },
                ].map((item) => (
                  <div key={item.label} className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <item.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{item.label}</p>
                      <p className="text-base font-semibold text-gray-900">{item.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}