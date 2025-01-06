import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { formatCurrency } from '../../lib/utils';

const mockCampaigns = [
  {
    id: '1',
    title: 'Summer Fashion Collection Launch',
    description: 'Promote our new summer fashion collection across social media platforms',
    budget: 5000,
    category: 'Fashion & Style',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    status: 'active',
    applicants: 12,
  },
  {
    id: '2',
    title: 'Healthy Living Product Campaign',
    description: 'Showcase our health supplements and wellness products',
    budget: 3500,
    category: 'Health & Wellness',
    startDate: '2024-05-15',
    endDate: '2024-06-15',
    status: 'pending',
    applicants: 8,
  },
  {
    id: '3',
    title: 'Tech Gadget Review Series',
    description: 'Create engaging content featuring our latest tech products',
    budget: 7500,
    category: 'Technology',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    status: 'draft',
    applicants: 0,
  },
];

export default function CampaignList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600">Manage your influencer marketing campaigns</p>
        </div>
        <Link to="/campaigns/create">
          <Button>Create Campaign</Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {mockCampaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {campaign.title}
                    </h2>
                    <p className="text-gray-600">{campaign.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {formatCurrency(campaign.budget)}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {campaign.startDate} - {campaign.endDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {campaign.applicants} applicants
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Badge variant="info">{campaign.category}</Badge>
                    <Badge
                      variant={
                        campaign.status === 'active'
                          ? 'success'
                          : campaign.status === 'pending'
                          ? 'warning'
                          : 'default'
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                </div>

                <Link
                  to={`/campaigns/${campaign.id}`}
                  className="flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <span className="mr-2">View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}