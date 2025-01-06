import { create } from 'zustand';
import { Message } from '@prisma/client';

interface Chat {
  userId: string;
  userName: string;
  userAvatar?: string;
  lastMessage: Message;
  unreadCount: number;
}

interface MessagesState {
  chats: Chat[];
  messages: Message[];
  activeChat: string | null;
  isLoading: boolean;
  error: string | null;
  setActiveChat: (userId: string) => void;
  sendMessage: (content: string, receiverId: string) => Promise<void>;
  fetchMessages: (userId: string) => Promise<void>;
}

// Mock data
const mockChats: Chat[] = [
  {
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    lastMessage: {
      id: '1',
      content: 'Hi, I\'d love to collaborate with you!',
      senderId: '1',
      receiverId: 'current-user',
      read: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    unreadCount: 2,
  },
  {
    userId: '2',
    userName: 'Mike Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    lastMessage: {
      id: '2',
      content: 'Thanks for your proposal',
      senderId: 'current-user',
      receiverId: '2',
      read: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    unreadCount: 0,
  },
];

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: 'current-user',
    content: 'Hi, I\'d love to collaborate with you!',
    read: false,
    createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '2',
    senderId: 'current-user',
    receiverId: '1',
    content: 'That sounds great! What do you have in mind?',
    read: true,
    createdAt: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
    updatedAt: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: '3',
    senderId: '1',
    receiverId: 'current-user',
    content: 'I have a new fashion campaign coming up',
    read: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const useMessages = create<MessagesState>((set, get) => ({
  chats: mockChats,
  messages: [],
  activeChat: null,
  isLoading: false,
  error: null,

  setActiveChat: (userId: string) => {
    set({ activeChat: userId });
  },

  sendMessage: async (content: string, receiverId: string) => {
    set({ isLoading: true });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newMessage: Message = {
        id: crypto.randomUUID(),
        content,
        senderId: 'current-user',
        receiverId,
        read: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      set(state => ({
        messages: [...state.messages, newMessage],
        chats: state.chats.map(chat => {
          if (chat.userId === receiverId) {
            return {
              ...chat,
              lastMessage: newMessage,
            };
          }
          return chat;
        }),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to send message',
        isLoading: false,
      });
    }
  },

  fetchMessages: async (userId: string) => {
    set({ isLoading: true });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter messages for this chat
      const chatMessages = mockMessages.filter(
        msg =>
          (msg.senderId === 'current-user' && msg.receiverId === userId) ||
          (msg.senderId === userId && msg.receiverId === 'current-user')
      );

      set({ messages: chatMessages, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch messages',
        isLoading: false,
      });
    }
  },
}));