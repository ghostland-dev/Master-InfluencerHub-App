import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { useMessages } from '../../hooks/useMessages';
import MessageList from '../../components/messages/MessageList';
import ChatWindow from '../../components/messages/ChatWindow';
import { useToast } from '../../hooks/useToast';

export default function Messages() {
  const { user } = useAuth();
  const { activeChat, fetchMessages } = useMessages();
  const { addToast } = useToast();

  // Redirect to login if not authenticated
  if (!user) {
    addToast({
      type: 'error',
      title: 'Authentication Required',
      message: 'Please login to access messages',
    });
    return <Navigate to="/login" replace state={{ from: '/messages' }} />;
  }

  const handleSelectChat = async (userId: string) => {
    await fetchMessages(userId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-12">
            {/* Chat List */}
            <div className="col-span-4 border-r border-gray-200">
              <MessageList onSelectChat={handleSelectChat} />
            </div>

            {/* Chat Window */}
            <div className="col-span-8 flex flex-col h-[calc(100vh-8rem)]">
              {activeChat ? (
                <ChatWindow recipientId={activeChat} />
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}