import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';

import { museoCyrl } from '@/assets/fonts/fonts';

import { Filter } from '../Filter';
import { AchievementProgress } from '../AchievementProgress';

import styles from './AchievementsOverview.module.scss';

export const AchievementsOverview = () => {
  const t = useTranslations('HomePage.AchievementsOverview');

  return (
    <section className={styles['achievements-overview']}>
      <div className={styles['achievements-overview__top']}>
        <h2
          className={clsx(
            styles['achievements-overview__title'],
            museoCyrl.className,
          )}
        >
          {t('title')}
        </h2>

        <div className={styles['achievements-overview__motivation']}>
          {t('motivation', { percent: 87 })}
        </div>
      </div>

      <AchievementProgress />
      <Filter />
    </section>
  );
};
