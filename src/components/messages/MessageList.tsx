import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useMessages } from '../../hooks/useMessages';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';

interface MessageListProps {
  onSelectChat: (userId: string) => void;
}

export default function MessageList({ onSelectChat }: MessageListProps) {
  const { chats, activeChat, setActiveChat } = useMessages();

  const handleSelectChat = (userId: string) => {
    setActiveChat(userId);
    onSelectChat(userId);
  };

  if (!chats || chats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
        <p className="mb-2">No messages yet</p>
        <p className="text-sm">Start a conversation with influencers or brands</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {chats.map((chat) => (
        <motion.button
          key={chat.userId}
          onClick={() => handleSelectChat(chat.userId)}
          className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
            activeChat === chat.userId ? 'bg-gray-50' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            <Avatar
              src={chat.userAvatar}
              name={chat.userName}
              size="md"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {chat.userName}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(chat.lastMessage.createdAt), { addSuffix: true })}
                </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-gray-500 truncate">
                  {chat.lastMessage.content}
                </p>
                {chat.unreadCount > 0 && (
                  <Badge variant="info" className="ml-2">
                    {chat.unreadCount}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}