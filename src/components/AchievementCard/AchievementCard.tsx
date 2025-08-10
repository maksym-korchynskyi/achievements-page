import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import info from '@/assets/icons/icon-info.svg?url';
import lockedAchievement from '@/assets/icons/icon-locked-achievement.svg?url';
import inProgressAchievement from '@/assets/icons/icon-in-progress-achievement.svg?url';

import { CardProgress } from '../CardProgress';
import { Achievement } from '@/types/Achievement';

import styles from './AchievementCard.module.scss';

interface Props {
  achievement: Achievement;
}

export const AchievementCard: React.FC<Props> = ({ achievement }) => {
  const t = useTranslations();

  const completed = achievement.rank === 3;
  const locked = !achievement.rank && !achievement.progress;

  return (
    <article
      className={clsx(styles['achievement-card'], {
        [styles['achievement-card--rank-0']]:
          !achievement.rank && achievement.progress,
        [styles['achievement-card--rank-1']]: achievement.rank === 1,
      })}
    >
      <div className={styles['achievement-card__top']}>
        <div className={styles['achievement-card__info-icon']}>
          <Image src={info} alt="info-icon" />
        </div>

        {locked && <Image src={lockedAchievement} alt="locked-icon" />}
        {!locked && <Image src={inProgressAchievement} alt="progress-icon" />}
      </div>

      <div className={styles['achievement-card__divider']} />

      <div
        className={clsx(styles['achievement-card__details'], {
          [styles['achievement-card__details--completed']]: completed,
        })}
      >
        <h3 className={styles['achievement-card__title']}>
          {t(achievement.titleKey)}
        </h3>

        {completed && (
          <div className={styles['achievement-card__description']}>
            {t(achievement.descriptionKey)}
          </div>
        )}

        {!completed && (
          <CardProgress
            target={achievement.target}
            progress={achievement.progress}
          />
        )}
      </div>
    </article>
  );
};
