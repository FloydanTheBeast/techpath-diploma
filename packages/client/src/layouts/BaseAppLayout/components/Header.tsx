import React from 'react';

import { Code, Group, Header as HeaderBase, Sx, Text, ThemeIcon, Title } from '@mantine/core';
import { IconRoute } from '@tabler/icons-react';

import { useCurrentUser } from 'src/hooks';

export const Header: React.FC = () => {
  const { permissions } = useCurrentUser();

  return (
    <HeaderBase height={60} px="md">
      <Group sx={headerStyles} h="100%" position="apart">
        <Group align="center">
          <ThemeIcon color="yellow" variant="gradient">
            <IconRoute size="2rem" />
          </ThemeIcon>
          <Title size={24} weight={500}>
            <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              {/* FIXME: Come up with a name */}
              MOOC
            </Text>
            {permissions.isAdmin && '.admin'}
          </Title>

          <Code sx={{ fontWeight: 700 }}>v{APP_VERSION}</Code>
        </Group>
      </Group>
    </HeaderBase>
  );
};

const headerStyles: Sx = theme => ({
  // paddingBottom: theme.spacing.md,
});
