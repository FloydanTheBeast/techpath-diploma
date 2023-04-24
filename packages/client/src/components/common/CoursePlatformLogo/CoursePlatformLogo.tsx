import React from 'react';

import { Center, Image, Sx, ThemeIcon } from '@mantine/core';
import type { Nullable } from '@shared/types';
import { IconSchool } from '@tabler/icons-react';

type CoursePlatformLogoProps = {
  logoUrl: Nullable<string>;
  sx?: Sx;
};

export const CoursePlatformLogo: React.FC<CoursePlatformLogoProps> = ({ logoUrl, sx }) => {
  return (
    <Center sx={sx}>
      {' '}
      {logoUrl ? (
        <Image fit="contain" height={32} width={32} src={logoUrl} />
      ) : (
        <ThemeIcon color="dark">
          <IconSchool size="2rem" stroke={1.5} />
        </ThemeIcon>
      )}
    </Center>
  );
};
