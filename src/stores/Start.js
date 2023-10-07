import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStart = create(
  persist(
    (set) => ({
      start: true,
      toggleStart: () => set((state) => ({ start: !state.start })),
    }),
    {
      name: "start",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);