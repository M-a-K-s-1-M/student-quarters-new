import { create } from 'zustand';

export const useUser = create((set) => ({
    user: {},
    isAuth: false,

    setIsAuth: (boolean) => set(() => ({
        isAuth: boolean,
    })),

    setUser: (user) => set(() => ({
        user: user,
    })),
}))