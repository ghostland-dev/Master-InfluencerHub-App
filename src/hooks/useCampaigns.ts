import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { campaignApi } from '../lib/api/campaigns';
import { useToast } from './useToast';

export function useCampaigns() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const campaigns = useQuery({
    queryKey: ['campaigns'],
    queryFn: () => campaignApi.list().then((res) => res.data),
  });

  const createCampaign = useMutation({
    mutationFn: (data: any) => campaignApi.create(data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      addToast({
        type: 'success',
        title: 'Campaign Created',
        message: 'Your campaign has been created successfully.',
      });
    },
    onError: (error: Error) => {
      addToast({
        type: 'error',
        title: 'Error',
        message: error.message,
      });
    },
  });

  const updateCampaign = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      campaignApi.update(id, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      addToast({
        type: 'success',
        title: 'Campaign Updated',
        message: 'Your campaign has been updated successfully.',
      });
    },
    onError: (error: Error) => {
      addToast({
        type: 'error',
        title: 'Error',
        message: error.message,
      });
    },
  });

  const deleteCampaign = useMutation({
    mutationFn: (id: string) => campaignApi.delete(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      addToast({
        type: 'success',
        title: 'Campaign Deleted',
        message: 'Your campaign has been deleted successfully.',
      });
    },
    onError: (error: Error) => {
      addToast({
        type: 'error',
        title: 'Error',
        message: error.message,
      });
    },
  });

  return {
    campaigns,
    createCampaign,
    updateCampaign,
    deleteCampaign,
  };
}