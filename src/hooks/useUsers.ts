import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../lib/api/users';
import { useToast } from './useToast';

export function useUsers() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const users = useQuery({
    queryKey: ['users'],
    queryFn: () => userApi.list().then((res) => res.data),
  });

  const createUser = useMutation({
    mutationFn: (data: any) => userApi.create(data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addToast({
        type: 'success',
        title: 'User Created',
        message: 'User has been created successfully.',
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

  const updateUser = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      userApi.update(id, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addToast({
        type: 'success',
        title: 'User Updated',
        message: 'User has been updated successfully.',
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

  const deleteUser = useMutation({
    mutationFn: (id: string) => userApi.delete(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addToast({
        type: 'success',
        title: 'User Deleted',
        message: 'User has been deleted successfully.',
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

  const updateProfile = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      userApi.updateProfile(id, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addToast({
        type: 'success',
        title: 'Profile Updated',
        message: 'Your profile has been updated successfully.',
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

  const updateAvatar = useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) =>
      userApi.updateAvatar(id, file).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      addToast({
        type: 'success',
        title: 'Avatar Updated',
        message: 'Your avatar has been updated successfully.',
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
    users,
    createUser,
    updateUser,
    deleteUser,
    updateProfile,
    updateAvatar,
  };
}