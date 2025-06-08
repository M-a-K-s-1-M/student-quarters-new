import { create } from "zustand";

export const useSidebar = create((set) => ({
    isOpen: true,

    setIsOpen: (b) => set(() => ({ isOpen: b })),
}))
