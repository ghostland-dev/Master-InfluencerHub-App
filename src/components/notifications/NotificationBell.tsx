import React from 'react';
import { Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../../hooks/useNotifications';
import NotificationList from './NotificationList';

export default function NotificationBell() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { notifications, unreadCount, markAllAsRead } = useNotifications();

  const handleOpen = () => {
    setIsOpen(true);
    if (unreadCount > 0) {
      markAllAsRead();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-40 border border-gray-200"
            >
              <NotificationList notifications={notifications} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}