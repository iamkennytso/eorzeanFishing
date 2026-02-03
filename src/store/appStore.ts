import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData, CaughtFish, ThemeName } from '@types/index';

interface AppState {
  // State
  user: UserData | null;
  caughtFish: CaughtFish;
  theme: ThemeName;

  // Actions
  setUser: (user: UserData | null) => void;
  toggleFish: (fishId: number) => void;
  setTheme: (theme: ThemeName) => void;
  clearUserData: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      caughtFish: {},
      theme: ThemeName.DARK,

      // Actions
      setUser: (user) => set({ user }),

      toggleFish: (fishId) =>
        set((state) => ({
          caughtFish: {
            ...state.caughtFish,
            [fishId]: !state.caughtFish[fishId],
          },
        })),

      setTheme: (theme) => set({ theme }),

      clearUserData: () => set({ user: null }),
    }),
    {
      name: 'eorzean-fishing-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        caughtFish: state.caughtFish,
        theme: state.theme,
      }),
    }
  )
);

// Selectors for optimal re-renders
export const useUser = () => useAppStore((state) => state.user);
export const useTheme = () => useAppStore((state) => state.theme);
export const useCaughtFish = () => useAppStore((state) => state.caughtFish);
export const useIsFishCaught = (fishId: number) =>
  useAppStore((state) => !!state.caughtFish[fishId]);

// Action selectors
export const useSetUser = () => useAppStore((state) => state.setUser);
export const useToggleFish = () => useAppStore((state) => state.toggleFish);
export const useSetTheme = () => useAppStore((state) => state.setTheme);
