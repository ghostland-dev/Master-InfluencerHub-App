import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, User, Building2 } from 'lucide-react';
import { useAuth, registerSchema, RegisterData } from '../lib/auth';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useToast } from '../hooks/useToast';

export default function Register() {
  const navigate = useNavigate();
  const { register: registerUser, isLoading, error } = useAuth();
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'INFLUENCER',
    },
  });

  const role = watch('role');

  const onSubmit = async (data: RegisterData) => {
    try {
      await registerUser(data);
      
      // Redirect to the appropriate dashboard
      navigate(`/dashboard/${data.role.toLowerCase()}`);
      
      addToast({
        type: 'success',
        title: 'Welcome to InfluenceHub!',
        message: 'Your account has been created successfully.',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Registration failed',
        message: error || 'Please check your information and try again.',
      });
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </>
      }
    >
      <div className="flex rounded-lg p-1 bg-gray-100 mb-8">
        <button
          type="button"
          onClick={() => setValue('role', 'INFLUENCER')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
            role === 'INFLUENCER'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Influencer
        </button>
        <button
          type="button"
          onClick={() => setValue('role', 'BUSINESS')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
            role === 'BUSINESS'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Business
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label={role === 'INFLUENCER' ? 'Full name' : 'Business name'}
          {...register('name')}
          error={errors.name?.message}
          leftIcon={role === 'INFLUENCER' ? <User className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
        />

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

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <Link to="/terms" className="font-medium text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Create account
        </Button>
      </form>
    </AuthLayout>
  );
}