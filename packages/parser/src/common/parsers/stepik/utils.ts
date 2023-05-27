import { CourseDifficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const mapStepikDifficulty = (difficulty: Nullable<string>): Nullable<CourseDifficulty> => {
  if (difficulty?.match(/.*easy.*/gi)) {
    return CourseDifficulty.Beginner;
  }
  if (difficulty?.match(/.*normal.*/gi)) {
    return CourseDifficulty.Intermediate;
  }
  if (difficulty?.match(/.*hard.*/gi)) {
    return CourseDifficulty.Advanced;
  }

  return null;
};
