import axios from 'axios';
import { useAuth } from './auth';
import { apiLimiter, securityHeaders } from './security';
import { config } from './config';

const api = axios.create({
  baseURL: config.api.url,
  headers: {
    'Content-Type': 'application/json',
    ...securityHeaders,
  },
  withCredentials: true, // Enable CORS credentials
});

// Add security headers and rate limiting
api.interceptors.request.use(async (config) => {
  try {
    // Rate limiting
    await apiLimiter.consume(config.url || 'default');
    
    // Add auth token
    const token = useAuth.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add CSRF token
    const csrfToken = localStorage.getItem('csrfToken');
    if (csrfToken) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }

    return config;
  } catch (error) {
    return Promise.reject(new Error('Too many requests. Please try again later.'));
  }
});

// Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuth.getState().logout();
    }
    
    if (error.response?.status === 429) {
      // Handle rate limiting
      const retryAfter = error.response.headers['retry-after'] || 60;
      return Promise.reject(new Error(`Too many requests. Please try again after ${retryAfter} seconds.`));
    }
    
    return Promise.reject(error);
  }
);

export default api;