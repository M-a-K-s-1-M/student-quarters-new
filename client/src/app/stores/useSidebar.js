import { create } from "zustand";

const useSidebar = create((set) => ({
    isActiveSidebar: false,
    activeTab: 'map',

    setIsActiveSidebar: (b) => set({ isActiveSidebar: b }),
    setActiveTab: (tab) => { set({ activeTab: tab }) },
}))

export default useSidebar;