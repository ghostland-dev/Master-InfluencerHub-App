import axios from 'axios';
import { useAuth } from './auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuth.getState().logout();
    }
    return Promise.reject(error);
  }
);

export const campaignApi = {
  create: (data: any) => api.post('/campaigns', data),
  list: () => api.get('/campaigns'),
  get: (id: string) => api.get(`/campaigns/${id}`),
  update: (id: string, data: any) => api.put(`/campaigns/${id}`, data),
  delete: (id: string) => api.delete(`/campaigns/${id}`),
};

export const profileApi = {
  get: () => api.get('/profile'),
  update: (data: any) => api.put('/profile', data),
  updateAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return api.put('/profile/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const messageApi = {
  list: () => api.get('/messages'),
  send: (data: any) => api.post('/messages', data),
  getThread: (userId: string) => api.get(`/messages/thread/${userId}`),
};

export default api;