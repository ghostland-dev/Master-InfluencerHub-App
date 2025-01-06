import axios from '../axios';
import { User } from '@prisma/client';

export const userApi = {
  create: (data: Partial<User>) =>
    axios.post<User>('/users', data),

  list: () =>
    axios.get<User[]>('/users'),

  get: (id: string) =>
    axios.get<User>(`/users/${id}`),

  update: (id: string, data: Partial<User>) =>
    axios.put<User>(`/users/${id}`, data),

  delete: (id: string) =>
    axios.delete(`/users/${id}`),

  // Profile-specific endpoints
  updateProfile: (id: string, data: any) =>
    axios.put(`/users/${id}/profile`, data),

  updateAvatar: (id: string, file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return axios.put(`/users/${id}/avatar`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};