import React from 'react';

import { SelectItem, Box, Group, Text } from '@mantine/core';
import { CoursePlatformInfoFragment } from '@shared/graphql';

import { CoursePlatformLogo } from 'src/components/common';

export type PlatformSelectItemProps = SelectItem & Pick<CoursePlatformInfoFragment, 'logoUrl'>;

const PlatformSelectItem = React.forwardRef<HTMLDivElement, PlatformSelectItemProps>(
  ({ value, label, logoUrl, ...restProps }, ref) => {
    return (
      <Box ref={ref} {...restProps}>
        <Group>
          <CoursePlatformLogo logoUrl={logoUrl} />
          <Text>{label}</Text>
        </Group>
      </Box>
    );
  },
);

PlatformSelectItem.displayName = 'PlatformSelectItem';

export { PlatformSelectItem };
