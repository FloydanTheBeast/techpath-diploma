import React from 'react';

import { Badge, DefaultMantineColor } from '@mantine/core';
import { CourseDifficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

type DifficultyBadge = {
  difficulty: Nullable<CourseDifficulty>;
};

export const DifficultyBadge: React.FC<DifficultyBadge> = ({ difficulty }) => {
  if (!difficulty) {
    return null;
  }

  return (
    <Badge size="md" color={COLOR_MAPPING[difficulty]}>
      {difficulty}
    </Badge>
  );
};

const COLOR_MAPPING: Record<CourseDifficulty, DefaultMantineColor> = {
  [CourseDifficulty.Beginner]: 'green',
  [CourseDifficulty.Intermediate]: 'yellow',
  [CourseDifficulty.Advanced]: 'red',
};
