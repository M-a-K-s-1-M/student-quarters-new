import { create } from 'zustand';

export const useUser = create((set) => ({
    isAuth: true,

    setIsAuth: (b) => set(() => ({ isAuth: b })),
}))

