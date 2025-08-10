'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { useFilterStore } from '@/store/FilterStore';

import { Dropdown } from '../Dropdown/Dropdown';
import { CategorySelector } from '../CategorySelector';

import styles from './Filter.module.scss';

export const Filter = () => {
  const setRank = useFilterStore(state => state.setRank);

  const t = useTranslations('HomePage.RankDropdown');

  return (
    <div className={styles['filter']}>
      <CategorySelector />

      <Dropdown
        options={[
          [null, t('all')],
          [0, t('only', { rank: 0 })],
          [1, t('only', { rank: 1 })],
          [2, t('only', { rank: 2 })],
          [3, t('only', { rank: 3 })],
        ]}
        defaultValue={0}
        onChange={setRank as (rank: number | null) => void}
      />
    </div>
  );
};
