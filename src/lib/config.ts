// Environment configuration
export const config = {
  env: import.meta.env.MODE || 'development',
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  },
  session: {
    secret: import.meta.env.VITE_SESSION_SECRET || 'your-secret-key',
  },
  security: {
    cookieSecure: import.meta.env.MODE === 'production',
  },
} as const;