import { StoreApi, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UseDarkmodeStoreType = {
  darkmode: boolean;
  toggleDarkmode: () => void;
};

const useDarkmodeStore = create(
  persist(
    (set: any) => ({
      darkmode: false,
      toggleDarkmode: () => set((state: UseDarkmodeStoreType) => ({ darkmode: !state.darkmode })),
      setDarkMode: (darkmode: boolean) => set(() => ({ darkmode })),
    }),
    {
      name: 'darkmode-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useDarkmodeStore, UseDarkmodeStoreType };
