import styles from './ProgressBar.module.scss';

interface Props {
  progress: number;
}

export const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className={styles['progress-bar']}>
      <div
        className={styles['progress-bar__progress']}
        style={{ width: `${progress}%` }}
      ></div>

      <div className={styles['progress-bar__remainder']}></div>
    </div>
  );
};
