import React from 'react';

import { Badge, DefaultMantineColor } from '@mantine/core';
import { Difficulty } from '@shared/graphql';
import type { Nullable } from '@shared/types';

type DifficultyBadge = {
  difficulty: Nullable<Difficulty>;
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

const COLOR_MAPPING: Record<Difficulty, DefaultMantineColor> = {
  [Difficulty.Beginner]: 'green',
  [Difficulty.Intermediate]: 'yellow',
  [Difficulty.Advanced]: 'red',
};
