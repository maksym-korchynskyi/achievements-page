import { create } from 'zustand';

import { Rank } from '@/types/Achievement';
import { Category } from '@/types/Category';

import { categories } from '@/data/achievements';

interface FilterState {
  rank: null | Rank;
  categories: Category[];
  categoryId: null | string;
  setRank: (rank: null | Rank) => void;
  setCategoryId: (categoryId: null | string) => void;
}

export const useFilterStore = create<FilterState>(set => ({
  rank: null,
  categoryId: null,
  categories: categories,
  setRank: rank => set({ rank }),
  setCategoryId: categoryId => set({ categoryId }),
}));
