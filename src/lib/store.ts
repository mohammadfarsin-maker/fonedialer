import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  isContactModalOpen: boolean;
  selectedIndustryFilter: string;
  selectedServiceFilter: string;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setContactModalOpen: (open: boolean) => void;
  setIndustryFilter: (industry: string) => void;
  setServiceFilter: (service: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isContactModalOpen: false,
  selectedIndustryFilter: 'All',
  selectedServiceFilter: 'All',
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setContactModalOpen: (open) => set({ isContactModalOpen: open }),
  setIndustryFilter: (industry) => set({ selectedIndustryFilter: industry }),
  setServiceFilter: (service) => set({ selectedServiceFilter: service }),
}));
