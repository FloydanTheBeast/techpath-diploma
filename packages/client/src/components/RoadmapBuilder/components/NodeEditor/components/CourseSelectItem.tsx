import React from 'react';

import { AutocompleteItem, Group, Stack, Text } from '@mantine/core';
import { Nullable } from '@shared/types';

import { CoursePlatformLogo } from 'src/components/common';

export type CourseSelectItemProps = AutocompleteItem & {
  title: string;
  platformLogo: Nullable<string>;
};

// eslint-disable-next-line react/display-name
export const CourseSelectItem = React.forwardRef<HTMLDivElement, CourseSelectItemProps>(
  ({ value, title, platformLogo, ...rest }, ref) => {
    return (
      <Group noWrap ref={ref} {...rest}>
        <CoursePlatformLogo logoUrl={platformLogo} />
        <Stack spacing={4}>
          <Text>{title}</Text>
          <Text size="xs" color="dimmed">
            {value}
          </Text>
        </Stack>
      </Group>
    );
  },
);
