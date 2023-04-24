import React from 'react';

import { AutocompleteItem, Box, Group, Text } from '@mantine/core';
import { CoursePlatformInfoFragment } from '@shared/graphql';

import { CoursePlatformLogo } from 'src/components/common';

export type PlatformSearchItemProps = AutocompleteItem &
  Pick<CoursePlatformInfoFragment, 'name' | 'logoUrl'>;

const PlatformSearchItem = React.forwardRef<HTMLDivElement, PlatformSearchItemProps>(
  ({ value, name, logoUrl, ...restProps }, ref) => {
    return (
      <Box ref={ref} {...restProps}>
        <Group>
          <CoursePlatformLogo logoUrl={logoUrl} />
          <Text>{name}</Text>
        </Group>
      </Box>
    );
  },
);

PlatformSearchItem.displayName = 'PlatformSearchItem';

export { PlatformSearchItem };
