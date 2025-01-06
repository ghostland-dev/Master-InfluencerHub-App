import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock } from 'lucide-react';
import { useAuth, loginSchema } from '../lib/auth';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useToast } from '../hooks/useToast';

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await login(data.email, data.password);
      
      // Redirect based on role
      let redirectPath = location.state?.from?.pathname;
      if (!redirectPath) {
        switch (user.role) {
          case 'ADMIN':
            redirectPath = '/admin';
            break;
          case 'INFLUENCER':
            redirectPath = '/dashboard/influencer';
            break;
          case 'BUSINESS':
            redirectPath = '/dashboard/business';
            break;
          default:
            redirectPath = '/';
        }
      }
      
      navigate(redirectPath, { replace: true });
      
      addToast({
        type: 'success',
        title: 'Welcome back!',
        message: 'You have successfully logged in.',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Login failed',
        message: err instanceof Error ? err.message : 'Please check your credentials and try again.',
      });
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle={
        <>
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up for free
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          leftIcon={<Mail className="h-5 w-5" />}
        />

        <Input
          label="Password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          leftIcon={<Lock className="h-5 w-5" />}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
}