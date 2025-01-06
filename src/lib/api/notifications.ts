import axios from '../axios';
import { Notification } from '@prisma/client';

export const notificationApi = {
  list: () =>
    axios.get<Notification[]>('/notifications'),

  markAsRead: (id: string) =>
    axios.put(`/notifications/${id}/read`),

  markAllAsRead: () =>
    axios.put('/notifications/read-all'),

  delete: (id: string) =>
    axios.delete(`/notifications/${id}`),
};