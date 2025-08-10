interface BaseAchievements {
  id: string;
  rank: number;
  titleKey: string;
  descriptionKey: string;
}

interface CompletedAchievement extends BaseAchievements {
  rank: 3;
}

interface InProgressAchievement extends BaseAchievements {
  rank: 0 | 1 | 2;

  target: number;
  progress: number;
}

export type Achievement = CompletedAchievement | InProgressAchievement;
export type Rank = Achievement['rank'];
