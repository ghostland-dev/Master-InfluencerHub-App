import React from 'react';
import { Bell, Lock, CreditCard, Globe, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h1>

      <div className="space-y-8">
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="password"
                  label="Current Password"
                  placeholder="Enter current password"
                />
                <Input
                  type="password"
                  label="New Password"
                  placeholder="Enter new password"
                />
              </div>
              <div className="mt-4">
                <Button>Update Password</Button>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: 'Campaign Invitations',
                  description: 'Receive notifications when brands invite you to their campaigns',
                },
                {
                  title: 'Messages',
                  description: 'Get notified when you receive new messages from brands',
                },
                {
                  title: 'Campaign Updates',
                  description: 'Updates about campaigns you are participating in',
                },
                {
                  title: 'Platform Updates',
                  description: 'News about new features and updates to the platform',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                Add or update your payment methods to receive campaign payments.
              </p>
              <Button>Add Payment Method</Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: 'Profile Visibility',
                  description: 'Control who can see your profile information',
                },
                {
                  title: 'Contact Permissions',
                  description: 'Manage who can contact you through the platform',
                },
                {
                  title: 'Data Usage',
                  description: 'Choose how your data is used and shared',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}