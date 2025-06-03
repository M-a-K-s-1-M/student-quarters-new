import { create } from "zustand";

const useSidebar = create((set) => ({
    isOpen: true,

    setIsOpen: (b) => set(() => ({ isOpen: b })),
}))

export default useSidebar;