import { create } from "zustand";

export const useNavbar = create(set => ({
    isOpen: false,
    setIsOpen: val => set({ isOpen: val })
}))