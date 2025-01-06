import React, { useEffect, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Send, Image, Paperclip, Smile } from 'lucide-react';
import { useMessages } from '../../hooks/useMessages';
import { useAuth } from '../../lib/auth';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../hooks/useToast';

interface ChatWindowProps {
  recipientId: string;
}

export default function ChatWindow({ recipientId }: ChatWindowProps) {
  const { user } = useAuth();
  const { messages, sendMessage, isLoading } = useMessages();
  const { addToast } = useToast();
  const [newMessage, setNewMessage] = React.useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = React.useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  // Ensure user is authenticated
  if (!user) {
    addToast({
      type: 'error',
      title: 'Authentication Required',
      message: 'Please login to send messages',
    });
    return null;
  }

  // Filter messages for this chat
  const chatMessages = messages.filter(
    msg => 
      (msg.senderId === user.id && msg.receiverId === recipientId) ||
      (msg.senderId === recipientId && msg.receiverId === user.id)
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || isLoading) return;

    try {
      await sendMessage(newMessage, recipientId);
      setNewMessage('');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Failed to Send',
        message: 'Could not send your message. Please try again.',
      });
    }
  };

  const handleTyping = () => {
    setIsTyping(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Rest of the component remains the same */}
    </div>
  );
}