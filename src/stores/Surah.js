import { create } from "zustand";

export const useSurah = create((set) => ({
    surahs: [],
    oneSurah: {},
    setSurahs: (data) => set({ surahs: data }),
    setOneSurah: (data) => set({ oneSurah: data })
}))

export const useMessage = create((set) => ({
    message: "",
    setMessage: (msg) => set({ message: msg })
}))