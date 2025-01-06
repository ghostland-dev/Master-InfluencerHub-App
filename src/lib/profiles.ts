import { create } from 'zustand';
import { InfluencerProfile, BusinessProfile } from '@prisma/client';
import { useAuth } from './auth';

interface ProfileState {
  influencerProfile: InfluencerProfile | null;
  businessProfile: BusinessProfile | null;
  isLoading: boolean;
  error: string | null;
  updateInfluencerProfile: (data: Partial<InfluencerProfile>) => Promise<void>;
  updateBusinessProfile: (data: Partial<BusinessProfile>) => Promise<void>;
  fetchProfile: () => Promise<void>;
}

// Mock storage
const STORAGE_KEY = 'influencehub_profiles';

const getProfiles = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : { influencers: [], businesses: [] };
};

const saveProfiles = (profiles: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
};

export const useProfiles = create<ProfileState>((set, get) => ({
  influencerProfile: null,
  businessProfile: null,
  isLoading: false,
  error: null,

  updateInfluencerProfile: async (data: Partial<InfluencerProfile>) => {
    const { user } = useAuth.getState();
    if (!user) throw new Error('No user logged in');

    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const profiles = getProfiles();
      const index = profiles.influencers.findIndex((p: any) => p.userId === user.id);

      const updatedProfile = {
        ...(index >= 0 ? profiles.influencers[index] : {}),
        ...data,
        userId: user.id,
        updatedAt: new Date().toISOString(),
      };

      if (index >= 0) {
        profiles.influencers[index] = updatedProfile;
      } else {
        profiles.influencers.push(updatedProfile);
      }

      saveProfiles(profiles);
      set({ influencerProfile: updatedProfile, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  updateBusinessProfile: async (data: Partial<BusinessProfile>) => {
    const { user } = useAuth.getState();
    if (!user) throw new Error('No user logged in');

    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const profiles = getProfiles();
      const index = profiles.businesses.findIndex((p: any) => p.userId === user.id);

      const updatedProfile = {
        ...(index >= 0 ? profiles.businesses[index] : {}),
        ...data,
        userId: user.id,
        updatedAt: new Date().toISOString(),
      };

      if (index >= 0) {
        profiles.businesses[index] = updatedProfile;
      } else {
        profiles.businesses.push(updatedProfile);
      }

      saveProfiles(profiles);
      set({ businessProfile: updatedProfile, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  fetchProfile: async () => {
    const { user } = useAuth.getState();
    if (!user) throw new Error('No user logged in');

    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const profiles = getProfiles();
      
      if (user.role === 'INFLUENCER') {
        const profile = profiles.influencers.find((p: any) => p.userId === user.id);
        set({ influencerProfile: profile || null });
      } else {
        const profile = profiles.businesses.find((p: any) => p.userId === user.id);
        set({ businessProfile: profile || null });
      }

      set({ isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch profile';
      set({ error: message, isLoading: false });
      throw error;
    }
  },
}));