import { create } from 'zustand';
import { Campaign, CampaignStatus } from '@prisma/client';

interface CampaignState {
  campaigns: Campaign[];
  activeCampaign: Campaign | null;
  isLoading: boolean;
  error: string | null;
  createCampaign: (data: Partial<Campaign>) => Promise<Campaign>;
  updateCampaign: (id: string, data: Partial<Campaign>) => Promise<Campaign>;
  deleteCampaign: (id: string) => Promise<void>;
  fetchCampaigns: () => Promise<void>;
  fetchCampaignById: (id: string) => Promise<void>;
}

// Mock storage
const STORAGE_KEY = 'influencehub_campaigns';

const getCampaigns = (): Campaign[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveCampaigns = (campaigns: Campaign[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
};

export const useCampaigns = create<CampaignState>((set, get) => ({
  campaigns: [],
  activeCampaign: null,
  isLoading: false,
  error: null,

  createCampaign: async (data: Partial<Campaign>) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newCampaign = {
        id: crypto.randomUUID(),
        ...data,
        status: CampaignStatus.DRAFT,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as Campaign;

      const campaigns = [...get().campaigns, newCampaign];
      saveCampaigns(campaigns);
      set({ campaigns, isLoading: false });

      return newCampaign;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create campaign';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  updateCampaign: async (id: string, data: Partial<Campaign>) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const campaigns = get().campaigns.map(campaign =>
        campaign.id === id
          ? { ...campaign, ...data, updatedAt: new Date().toISOString() }
          : campaign
      );

      const updatedCampaign = campaigns.find(c => c.id === id);
      if (!updatedCampaign) throw new Error('Campaign not found');

      saveCampaigns(campaigns);
      set({ campaigns, isLoading: false });

      return updatedCampaign;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update campaign';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  deleteCampaign: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const campaigns = get().campaigns.filter(campaign => campaign.id !== id);
      saveCampaigns(campaigns);
      set({ campaigns, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete campaign';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  fetchCampaigns: async () => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const campaigns = getCampaigns();
      set({ campaigns, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch campaigns';
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  fetchCampaignById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const campaign = get().campaigns.find(c => c.id === id);
      if (!campaign) throw new Error('Campaign not found');
      set({ activeCampaign: campaign, isLoading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch campaign';
      set({ error: message, isLoading: false });
      throw error;
    }
  },
}));