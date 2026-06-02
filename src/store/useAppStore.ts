import { create } from 'zustand';

type Language = 'en' | 'id';

interface AppState {
  language: Language;
  isBlackTheme: boolean;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  isBlackTheme: false,
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'id' : 'en' })),
  toggleTheme: () => set((state) => ({ isBlackTheme: !state.isBlackTheme })),
}));
