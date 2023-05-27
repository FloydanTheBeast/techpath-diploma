import { CourseDifficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const mapCourseraDifficulty = (difficulty: Nullable<string>): Nullable<CourseDifficulty> => {
  if (difficulty?.match(/.*beginner.*/gi)) {
    return CourseDifficulty.Beginner;
  }
  if (difficulty?.match(/.*intermediate.*/gi)) {
    return CourseDifficulty.Intermediate;
  }
  if (difficulty?.match(/.*advanced.*/gi)) {
    return CourseDifficulty.Advanced;
  }

  return null;
};
