import { create } from "zustand";

const useUser = create((set) => ({
    isAuth: false,

    setIsAuth: (b) => set({ isAuth: b })
}))

export default useUser;