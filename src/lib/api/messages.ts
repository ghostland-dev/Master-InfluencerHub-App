import axios from '../axios';
import { Message } from '@prisma/client';

export const messageApi = {
  create: (data: Partial<Message>) =>
    axios.post<Message>('/messages', data),

  list: () =>
    axios.get<Message[]>('/messages'),

  getThread: (userId: string) =>
    axios.get<Message[]>(`/messages/thread/${userId}`),

  markAsRead: (id: string) =>
    axios.put(`/messages/${id}/read`),

  delete: (id: string) =>
    axios.delete(`/messages/${id}`),
};