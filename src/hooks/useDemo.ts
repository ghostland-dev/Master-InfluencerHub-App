import { create } from 'zustand';

interface DemoState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useDemo = create<DemoState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));