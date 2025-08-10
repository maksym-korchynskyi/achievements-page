import { CategoryList } from '@/components/CategoryList';
import { AchievementsOverview } from '@/components/AchievementsOverview';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['achievements-page']}>
      <AchievementsOverview />
      <CategoryList />
    </main>
  );
}
