import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useSurah = create((set) => ({
    surahs: [],
    oneSurah: null,
    searchVal: "",
    isSearching: false,
    setSurahs: (data) => set({ surahs: data }),
    setOneSurah: (data) => set({ oneSurah: data }),
    setSearchVal: (val) => set({ searchVal: val }),
    setIsSearching: (e) => set({ isSearching: e })
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
            setLastRead: data => set({ lasRead: data })
        }),
        {
            name: "Last read",
            storage: createJSONStorage(() => localStorage),
            version: 1
        }
    )
)
