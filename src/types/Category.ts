import { Achievement } from './Achievement';

export interface Category {
  id: string;
  titleKey: string;
  achievements: Achievement[];
}
