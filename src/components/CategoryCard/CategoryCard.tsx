import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './CategoryCard.module.scss';

interface Props {
  total: number;
  number: number;
  titleKey: string;
  isActive: boolean;
  onCategoryChange: () => void;
}

export const CategoryCard: React.FC<Props> = ({
  total,
  number,
  titleKey,
  isActive,
  onCategoryChange,
}) => {
  const t = useTranslations();

  return (
    <button
      onClick={onCategoryChange}
      className={clsx(styles['category-card'], {
        [styles['category-card--active']]: isActive,
      })}
    >
      <div className={styles['category-card__number']}>
        {number.toString().padStart(2, '0')}
      </div>

      <div className={styles['category-card__bottom']}>
        <h3 className={styles['category-card__title']}>{t(titleKey)}</h3>
        <div className={styles['category-card__total']}>{total}</div>
      </div>
    </button>
  );
};
