import React, { useMemo } from 'react';

import { Category } from '@/types/Category';
import { CategoryCard } from '../CategoryCard';
import { useFilterStore } from '@/store/FilterStore';

import styles from './CategorySelector.module.scss';

function shouldRenderDivider(
  i: number,
  currCategory: string | number | null | undefined,
  categories: Category[],
  category: Category,
): boolean {
  if (i === 0) {
    const mainActive = !currCategory;
    const currActive = category.id === currCategory;

    return !(mainActive || currActive);
  }

  const prevCategory = categories[i - 1];

  const prevActive = prevCategory.id === currCategory;
  const currActive = category.id === currCategory;

  return !(prevActive || currActive);
}

export const CategorySelector = () => {
  const rank = useFilterStore(state => state.rank);
  const categories = useFilterStore(state => state.categories);
  const categoryId = useFilterStore(state => state.categoryId);
  const setCategoryId = useFilterStore(state => state.setCategoryId);

  const byCategory = useMemo(
    () =>
      categories.reduce((byCategory, category, i) => {
        for (const achievement of category.achievements) {
          if (rank === null) {
            byCategory[i] += 3;
          } else if (achievement.rank === rank) {
            byCategory[i]++;
          }
        }
        return byCategory;
      }, new Array(categories.length).fill(0)),
    [categories, rank],
  );

  const total = useMemo(
    () => byCategory.reduce((sum, count) => sum + count, 0),
    [byCategory],
  );

  return (
    <div className={styles['category-selector']}>
      <CategoryCard
        number={1}
        titleKey={'achievements.globalTitle'}
        isActive={!categoryId}
        total={total}
        onCategoryChange={() => setCategoryId(null)}
      />

      {categories.map((category, i) => (
        <div
          key={category.id}
          className={styles['category-selector__category-card']}
        >
          {shouldRenderDivider(i, categoryId, categories, category) && (
            <div className={styles['category-selector__divider']}></div>
          )}

          <CategoryCard
            number={i + 2}
            titleKey={category.titleKey}
            isActive={categoryId === category.id}
            total={byCategory[i]}
            onCategoryChange={() => setCategoryId(category.id)}
          />
        </div>
      ))}
    </div>
  );
};
