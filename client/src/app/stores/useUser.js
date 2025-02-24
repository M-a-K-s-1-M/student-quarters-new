import { create } from "zustand";

const useUser = create((set) => ({
    isAuth: true,

    setIsAuth: (b) => set({ isAuth: b })
}))

export default useUser;