import { create } from 'zustand';
import { z } from 'zod';
import { Role } from '@prisma/client';
import { userStorage, sessionStorage, type StorageUser } from './storage';
import { useToast } from '../hooks/useToast';
import { loginLimiter, passwordPolicy, validateInput, sanitizeInput } from './security';

export const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .transform(sanitizeInput)
    .refine(val => validateInput(val, 'email'), {
      message: 'Invalid email format',
    }),
  password: z.string()
    .min(passwordPolicy.minLength, `Password must be at least ${passwordPolicy.minLength} characters`)
    .refine(passwordPolicy.validate, {
      message: 'Password must include uppercase, lowercase, numbers, and special characters',
    }),
});

export const registerSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .transform(sanitizeInput),
  email: z.string()
    .email('Invalid email address')
    .transform(sanitizeInput)
    .refine(val => validateInput(val, 'email'), {
      message: 'Invalid email format',
    }),
  password: z.string()
    .min(passwordPolicy.minLength, `Password must be at least ${passwordPolicy.minLength} characters`)
    .refine(passwordPolicy.validate, {
      message: 'Password must include uppercase, lowercase, numbers, and special characters',
    }),
  role: z.enum(['INFLUENCER', 'BUSINESS', 'ADMIN']),
});

export type RegisterData = z.infer<typeof registerSchema>;

interface AuthState {
  user: StorageUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<StorageUser>;
  register: (data: RegisterData) => Promise<StorageUser>;
  logout: () => void;
  clearError: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: sessionStorage.getCurrentUser(),
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Rate limiting check
      await loginLimiter.consume(email);

      const user = userStorage.findByEmail(email);
      
      if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
      }

      // Generate token with expiration
      const token = btoa(`${email}:${password}:${Date.now() + 24 * 60 * 60 * 1000}`);
      localStorage.setItem('token', token);
      sessionStorage.setCurrentUser(user);
      
      // Generate new CSRF token
      const csrfToken = crypto.randomUUID();
      localStorage.setItem('csrfToken', csrfToken);
      
      set({ user, token, isLoading: false });
      return user;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  register: async (data: RegisterData) => {
    set({ isLoading: true, error: null });
    try {
      const existingUser = userStorage.findByEmail(data.email);
      if (existingUser) {
        throw new Error('Email already exists');
      }

      const user = userStorage.create(data);
      const token = btoa(`${data.email}:${data.password}:${Date.now() + 24 * 60 * 60 * 1000}`);
      
      localStorage.setItem('token', token);
      sessionStorage.setCurrentUser(user);
      
      // Generate new CSRF token
      const csrfToken = crypto.randomUUID();
      localStorage.setItem('csrfToken', csrfToken);
      
      set({ user, token, isLoading: false });
      return user;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('csrfToken');
    sessionStorage.setCurrentUser(null);
    set({ user: null, token: null });
  },

  clearError: () => set({ error: null }),
}));