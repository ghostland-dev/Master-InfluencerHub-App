import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  Settings,
  Bell,
  CheckCircle,
  Clock,
  List,
  Grid,
  Filter,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { formatCurrency } from '../../lib/utils';
import ContentCalendar from '../../components/calendar/ContentCalendar';
import TaskBoard from '../../components/tasks/TaskBoard';
import ProjectList from '../../components/projects/ProjectList';
import AnalyticsChart from '../../components/analytics/AnalyticsChart';
import { motion } from 'framer-motion';

export default function InfluencerDashboard() {
  const [view, setView] = useState<'calendar' | 'board'>('calendar');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Sarah!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setView(view === 'calendar' ? 'board' : 'calendar')}
                leftIcon={view === 'calendar' ? <List className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
              >
                {view === 'calendar' ? 'Board View' : 'Calendar View'}
              </Button>
              <Link to="/calendar">
                <Button leftIcon={<Calendar className="h-5 w-5" />}>
                  Schedule Content
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
                    <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(12450)}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-green-600 text-sm font-medium">+12.5%</span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
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
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-blue-600 text-sm font-medium">4 pending</span>
                  <span className="text-gray-500 text-sm ml-2">approvals</span>
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
                    <p className="text-sm font-medium text-gray-600">Total Followers</p>
                    <p className="text-2xl font-semibold text-gray-900">124.8K</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-purple-600 text-sm font-medium">+2.4K</span>
                  <span className="text-gray-500 text-sm ml-2">new followers</span>
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
                    <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                    <p className="text-2xl font-semibold text-gray-900">5.2%</p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-orange-600 text-sm font-medium">+0.8%</span>
                  <span className="text-gray-500 text-sm ml-2">from last week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Calendar / Task Board */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <CardTitle>{view === 'calendar' ? 'Content Calendar' : 'Task Board'}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Filter className="h-4 w-4" />}
                  >
                    Filter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Grid className="h-4 w-4" />}
                    onClick={() => setView(view === 'calendar' ? 'board' : 'calendar')}
                  >
                    {view === 'calendar' ? 'Board View' : 'Calendar View'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {view === 'calendar' ? <ContentCalendar /> : <TaskBoard />}
              </CardContent>
            </Card>

            {/* Analytics Chart */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <AnalyticsChart />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Fashion Brand Campaign',
                      deadline: '2024-03-20',
                      type: 'Post',
                      status: 'pending',
                    },
                    {
                      title: 'Product Review Video',
                      deadline: '2024-03-22',
                      type: 'Video',
                      status: 'in-progress',
                    },
                    {
                      title: 'Instagram Story Series',
                      deadline: '2024-03-25',
                      type: 'Story',
                      status: 'approved',
                    },
                  ].map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Clock className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{task.title}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <span className="text-sm text-gray-500">
                            Due: {new Date(task.deadline).toLocaleDateString()}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{task.type}</span>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          task.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : task.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Projects */}
            <Card>
              <CardHeader className="p-6">
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectList />
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
                    <Button className="w-full justify-start" leftIcon={<TrendingUp className="h-5 w-5" />}>
                      Create Campaign
                    </Button>
                  </Link>
                  <Link to="/messages">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      leftIcon={<MessageSquare className="h-5 w-5" />}
                    >
                      Message Brands
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