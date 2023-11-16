import { Difficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const mapStepikDifficulty = (difficulty: Nullable<string>): Nullable<Difficulty> => {
  if (difficulty?.match(/.*easy.*/gi)) {
    return Difficulty.Beginner;
  }
  if (difficulty?.match(/.*normal.*/gi)) {
    return Difficulty.Intermediate;
  }
  if (difficulty?.match(/.*hard.*/gi)) {
    return Difficulty.Advanced;
  }

  return null;
};
