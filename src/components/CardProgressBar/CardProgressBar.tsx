import React from 'react';

import styles from './CardProgressBar.module.scss';

interface Props {
  progress: number;
}

export const CardProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className={styles['card-progress-bar']}>
      <div
        className={styles['card-progress-bar__progress']}
        style={{ width: `${progress}%` }}
      ></div>

      <div className={styles['card-progress-bar__remainder']}></div>
    </div>
  );
};
