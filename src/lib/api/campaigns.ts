import axios from '../axios';
import { Campaign } from '@prisma/client';

export const campaignApi = {
  create: (data: Partial<Campaign>) =>
    axios.post<Campaign>('/campaigns', data),

  list: () =>
    axios.get<Campaign[]>('/campaigns'),

  get: (id: string) =>
    axios.get<Campaign>(`/campaigns/${id}`),

  update: (id: string, data: Partial<Campaign>) =>
    axios.put<Campaign>(`/campaigns/${id}`, data),

  delete: (id: string) =>
    axios.delete(`/campaigns/${id}`),
};