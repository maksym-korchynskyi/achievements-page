import styles from './OpenCount.module.scss';

interface Props {
  count: number;
  text: string;
}

export const OpenCount: React.FC<Props> = ({ count, text }) => {
  return (
    <div className={styles['open-count']}>
      <h3 className={styles['open-count__count']}>{count}</h3>
      <div className={styles['open-count__text']}>{text}</div>
    </div>
  );
};
