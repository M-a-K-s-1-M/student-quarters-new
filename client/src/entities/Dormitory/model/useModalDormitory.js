import { create } from "zustand";

export const useModalDormitory = create((set) => ({
    isOpen: false,
    dormitory: null,

    openModal: (dormitory) => set({ isOpen: true, dormitory: dormitory }),
    closeModal: () => set({ isOpen: false, dormitory: null }),
}));