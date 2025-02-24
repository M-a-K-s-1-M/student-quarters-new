import { create } from "zustand";

const useSidebar = create((set) => ({
    isActiveSidebar: false,

    setIsActiveSidebar: (b) => set({ isActiveSidebar: b })
}))

export default useSidebar;