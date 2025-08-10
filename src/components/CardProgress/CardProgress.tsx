import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './CardProgress.module.scss';
import { CardProgressBar } from '../CardProgressBar';

interface Props {
  target: number;
  progress: number;
}

export const CardProgress: React.FC<Props> = ({ target, progress }) => {
  const t = useTranslations('HomePage.AchievementsOverview');

  return (
    <div className={styles['card-progress']}>
      <div className={styles['card-progress__top']}>
        <div className={clsx(styles['card-progress__title'])}>{t('title')}</div>

        <div>
          <span className={styles['card-progress__progress']}>{progress}</span>
          <span className={styles['card-progress__target']}> / {target}</span>
        </div>
      </div>

      <CardProgressBar progress={(progress / target) * 100} />
    </div>
  );
};
