import { Difficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const mapCourseraDifficulty = (difficulty: Nullable<string>): Nullable<Difficulty> => {
  if (difficulty?.match(/.*beginner.*/gi)) {
    return Difficulty.Beginner;
  }
  if (difficulty?.match(/.*intermediate.*/gi)) {
    return Difficulty.Intermediate;
  }
  if (difficulty?.match(/.*advanced.*/gi)) {
    return Difficulty.Advanced;
  }

  return null;
};
