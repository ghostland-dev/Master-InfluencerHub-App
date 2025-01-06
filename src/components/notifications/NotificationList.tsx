import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Calendar, Bell, AlertCircle } from 'lucide-react';
import { Notification } from '../../hooks/useNotifications';

const icons = {
  message: MessageSquare,
  campaign: Calendar,
  system: Bell,
  application: AlertCircle,
};

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No notifications
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => {
          const Icon = icons[notification.type];
          
          const content = (
            <div className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
            </div>
          );

          return notification.link ? (
            <Link key={notification.id} to={notification.link}>
              {content}
            </Link>
          ) : (
            <div key={notification.id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}