import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationApi } from '../lib/api/notifications';

export function useNotifications() {
  const queryClient = useQueryClient();

  const notifications = useQuery({
    queryKey: ['notifications'],
    queryFn: () => notificationApi.list().then((res) => res.data),
  });

  const markAsRead = useMutation({
    mutationFn: (id: string) =>
      notificationApi.markAsRead(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const markAllAsRead = useMutation({
    mutationFn: () => notificationApi.markAllAsRead().then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const deleteNotification = useMutation({
    mutationFn: (id: string) =>
      notificationApi.delete(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  return {
    notifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
}