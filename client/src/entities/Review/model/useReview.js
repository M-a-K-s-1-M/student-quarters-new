import { create } from "zustand";

export const useReview = create((set) => ({
    reviews: [],

    setReviews: (reviews) => set({ reviews }),
}));