import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Icon from '@/assets/icons/icon-achievement.svg?url';
import { museoCyrl } from '@/assets/fonts/fonts';

import { ProgressBar } from '../ProgressBar';
import styles from './AchievementCount.module.scss';

interface Props {
  className: string;

  opened: number;
  total: number;
}

export const AchievementCount: React.FC<Props> = ({
  className,
  opened,
  total,
}) => {
  const t = useTranslations('HomePage.AchievementsOverview');

  return (
    <article className={clsx(className, styles['achievements-count'])}>
      <div className={styles['achievements-count__top']}>
        <div className={styles['achievements-count__icon']}>
          <Image src={Icon} alt="icon" />
        </div>

        <div
          className={clsx(
            styles['achievements-count__title'],
            museoCyrl.className,
          )}
        >
          {t('opened')}
        </div>

        <div>
          <span className={styles['achievements-count__opened']}>{opened}</span>
          <span className={styles['achievements-count__total']}>
            {' '}
            / {total}
          </span>
        </div>
      </div>

      <ProgressBar progress={(opened / total) * 100} />
    </article>
  );
};
