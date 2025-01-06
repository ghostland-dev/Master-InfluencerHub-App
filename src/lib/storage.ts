import { Role } from '@prisma/client';

// Type definitions
export interface StorageUser {
  id: string;
  email: string;
  name: string;
  password: string;
  role: Role;
  bio: string | null;
  avatar: string | null;
  location: string | null;
  verified: boolean;
  instagram: string | null;
  youtube: string | null;
  tiktok: string | null;
  twitter: string | null;
  createdAt: string;
  updatedAt: string;
}

// Storage keys
const STORAGE_KEYS = {
  USERS: 'influencehub_users',
  CURRENT_USER: 'influencehub_current_user',
} as const;

// Helper functions
const getItem = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// User operations
export const userStorage = {
  create: (data: Omit<StorageUser, 'id' | 'createdAt' | 'updatedAt'>): StorageUser => {
    const users = getItem<StorageUser[]>(STORAGE_KEYS.USERS, []);
    const now = new Date().toISOString();
    
    const newUser: StorageUser = {
      ...data,
      id: crypto.randomUUID(),
      bio: null,
      avatar: null,
      location: null,
      verified: data.role === 'ADMIN',
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
      createdAt: now,
      updatedAt: now,
    };

    users.push(newUser);
    setItem(STORAGE_KEYS.USERS, users);
    return newUser;
  },

  findByEmail: (email: string): StorageUser | null => {
    const users = getItem<StorageUser[]>(STORAGE_KEYS.USERS, []);
    return users.find(user => user.email === email) || null;
  },

  findById: (id: string): StorageUser | null => {
    const users = getItem<StorageUser[]>(STORAGE_KEYS.USERS, []);
    return users.find(user => user.id === id) || null;
  },

  clear: () => {
    localStorage.removeItem(STORAGE_KEYS.USERS);
  },
};

// Session management
export const sessionStorage = {
  setCurrentUser: (user: StorageUser | null): void => {
    if (user) {
      setItem(STORAGE_KEYS.CURRENT_USER, user);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  },

  getCurrentUser: (): StorageUser | null => {
    return getItem<StorageUser | null>(STORAGE_KEYS.CURRENT_USER, null);
  },
};

// Initialize with some mock data
export const initializeStorage = () => {
  // Clear existing data
  userStorage.clear();
  
  // Create admin user
  userStorage.create({
    email: 'admin@influencehub.com',
    name: 'System Administrator',
    password: 'admin123',
    role: 'ADMIN',
  });

  // Create mock users
  userStorage.create({
    email: 'influencer@example.com',
    name: 'Sarah Johnson',
    password: 'password123',
    role: 'INFLUENCER',
  });

  userStorage.create({
    email: 'business@example.com',
    name: 'Tech Gear Pro',
    password: 'password123',
    role: 'BUSINESS',
  });
};