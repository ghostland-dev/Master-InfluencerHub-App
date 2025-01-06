import { create } from 'zustand';

interface BookingState {
  isModalOpen: boolean;
  selectedInfluencer: {
    id: string;
    name: string;
    pricing: {
      postRate: number;
      storyRate: number;
      videoRate: number;
    };
  } | null;
  openModal: (influencer: BookingState['selectedInfluencer']) => void;
  closeModal: () => void;
}

export const useBooking = create<BookingState>((set) => ({
  isModalOpen: false,
  selectedInfluencer: null,
  openModal: (influencer) => set({ isModalOpen: true, selectedInfluencer: influencer }),
  closeModal: () => set({ isModalOpen: false, selectedInfluencer: null }),
}));