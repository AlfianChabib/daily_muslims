import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useSurah = create((set) => ({
  surahs: [],
  oneSurah: null,
  setSurahs: (data) => set({ surahs: data }),
  setOneSurah: (data) => set({ oneSurah: data }),
}));

export const useMessage = create((set) => ({
  message: null,
  setMessage: (msg) => set({ message: msg }),
}));

export const useLocalStorage = create(
  persist(
    (set) => ({
      data: null,
      setData: (data) => set({ data }),
    }),
    {
      name: "Data Quran's",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export const useLastRead = create(
  persist(
    (set) => ({
      lastRead: null,
      setLastRead: (data) => set({ lastRead: data }),
    }),
    {
      name: "Last read",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export const useStarSurah = create(
  persist(
    (set) => ({
      dataStarSurah: [],
      setDataStarSurah: (data) =>
        set(({ dataStarSurah }) => ({
          dataStarSurah: [...dataStarSurah, data],
        })),
    }),
    {
      name: "Stared Surah",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
