'use client';

import React, { useMemo } from 'react';

import { CategorySection } from './CategorySection';

import { useFilterStore } from '@/store/FilterStore';

export const CategoryList = () => {
  const categoryId = useFilterStore(state => state.categoryId);
  const categories = useFilterStore(state => state.categories);

  const filteredCategories = useMemo(
    () =>
      categoryId
        ? categories.filter(category => category.id === categoryId)
        : categories,
    [categories, categoryId],
  );

  return filteredCategories.map(category => (
    <CategorySection key={category.id} category={category} />
  ));
};
