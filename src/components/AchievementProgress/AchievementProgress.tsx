'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { OpenCount } from '../OpenCount';
import { useFilterStore } from '@/store/FilterStore';
import { AchievementCount } from '../AchievementCount';

import styles from './AchievementProgress.module.scss';

export const AchievementProgress = () => {
  const t = useTranslations('HomePage.AchievementsOverview');
  const categories = useFilterStore(state => state.categories);

  const { ranks, total } = useMemo(() => {
    const progress = {
      total: 0,
      ranks: [0, 0, 0],
    };

    for (const category of categories) {
      for (const achievement of category.achievements) {
        for (let i = 0; i < achievement.rank; i++) {
          progress.ranks[i]++;
        }

        progress.total += 3;
      }
    }

    return progress;
  }, [categories]);

  const opened = ranks.reduce((sum, count) => sum + count, 0);
  const closed = total - opened;

  return (
    <article className={styles['achievements-progress']}>
      <AchievementCount
        className={styles['achievements-progress__count']}
        opened={opened}
        total={total}
      />

      {ranks.map((value, i) => (
        <OpenCount
          key={i}
          count={value}
          text={t('openedWithRank', { rank: i + 1 })}
        />
      ))}

      <OpenCount count={closed} text={t('closed')} />
    </article>
  );
};
