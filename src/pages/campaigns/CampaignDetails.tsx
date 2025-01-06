import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, DollarSign, Users, BarChart, Clock, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';
import { formatCurrency } from '../../lib/utils';

const mockCampaign = {
  id: '1',
  title: 'Summer Fashion Collection Launch',
  description: 'We are looking for fashion influencers to promote our new summer collection. The campaign will involve creating engaging content showcasing our latest designs across various social media platforms.',
  budget: 5000,
  category: 'Fashion & Style',
  startDate: '2024-06-01',
  endDate: '2024-06-30',
  status: 'active',
  requirements: [
    'Minimum 10K followers on Instagram',
    'Experience in fashion content creation',
    'High engagement rate (>3%)',
    'Ability to create both photos and videos',
  ],
  metrics: {
    applicants: 12,
    selected: 5,
    inProgress: 3,
    completed: 2,
  },
  applicants: [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      followers: '25K',
      engagement: '4.2%',
      status: 'selected',
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      followers: '15K',
      engagement: '3.8%',
      status: 'pending',
    },
  ],
};

export default function CampaignDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          {/* Campaign Overview */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{mockCampaign.title}</CardTitle>
                  <div className="mt-2 flex items-center space-x-3">
                    <Badge variant="info">{mockCampaign.category}</Badge>
                    <Badge variant="success">{mockCampaign.status}</Badge>
                  </div>
                </div>
                <Button>Edit Campaign</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{mockCampaign.description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="font-semibold">{formatCurrency(mockCampaign.budget)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">
                      {mockCampaign.startDate} - {mockCampaign.endDate}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {mockCampaign.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Applicants */}
          <Card>
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockCampaign.applicants.map((applicant) => (
                  <div
                    key={applicant.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar
                        src={applicant.avatar}
                        name={applicant.name}
                        size="lg"
                      />
                      <div>
                        <h4 className="font-semibold">{applicant.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{applicant.followers} followers</span>
                          <span>{applicant.engagement} engagement</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={applicant.status === 'selected' ? 'success' : 'default'}
                      >
                        {applicant.status}
                      </Badge>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Metrics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>Total Applicants</span>
                  </div>
                  <span className="font-semibold">{mockCampaign.metrics.applicants}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-400" />
                    <span>Selected</span>
                  </div>
                  <span className="font-semibold">{mockCampaign.metrics.selected}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>In Progress</span>
                  </div>
                  <span className="font-semibold">{mockCampaign.metrics.inProgress}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BarChart className="h-5 w-5 text-gray-400" />
                    <span>Completed</span>
                  </div>
                  <span className="font-semibold">{mockCampaign.metrics.completed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}