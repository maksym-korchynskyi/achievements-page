import React from 'react';
import { useTranslations } from 'next-intl';

import { Category } from '@/types/Category';
import { useFilterStore } from '@/store/FilterStore';
import { AchievementList } from '../AchievementList';

import styles from './CategorySection.module.scss';

interface Props {
  category: Category;
}

export const CategorySection: React.FC<Props> = ({ category }) => {
  const t = useTranslations();
  const rank = useFilterStore(state => state.rank);

  const filteredAchievements =
    rank !== null
      ? category.achievements.filter(achievement => achievement.rank === rank)
      : category.achievements;

  const total = filteredAchievements.length * (rank !== null ? 1 : 3);

  if (!total) {
    return;
  }

  return (
    <section className={styles['category-section']}>
      <h2 className={styles['category-section__title']}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {t(category.titleKey as any)}

        <sup className={styles['category-section__count']}>{total}</sup>
      </h2>

      <AchievementList achievements={filteredAchievements} />
    </section>
  );
};
