import React from 'react';

import {
  Group,
  Navbar as NavbarBase,
  UnstyledButton,
  Text,
  ThemeIcon,
  Box,
  rem,
  Avatar,
  NavLink,
} from '@mantine/core';
import { getUserFullName } from '@shared/utils';
import { IconChevronRight, IconHome } from '@tabler/icons-react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useAuth } from 'src/hooks';

import { NavbarLink } from '../types';

const navbarLinks: NavbarLink[] = [{ label: 'Home', path: appRoutes.app.index, icon: IconHome }];

export const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return (
    <NavbarBase width={{ base: 300 }} p="xs">
      <NavbarBase.Section grow>
        {navbarLinks.map(link => (
          <NavLink
            key={link.path}
            label={link.label}
            icon={
              <ThemeIcon color="blue" variant="light">
                <link.icon size="1rem" stroke={2} />
              </ThemeIcon>
            }
            component={Link}
            to={link.path}
            active={!!matchPath({ path: link.path, end: true }, location.pathname)}
          />
        ))}
      </NavbarBase.Section>
      <NavbarBase.Section>
        <Box
          sx={theme => ({
            paddingTop: theme.spacing.sm,
            borderTop: `${rem(1)} solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
          })}
        >
          <UnstyledButton
            sx={theme => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              },
            })}
          >
            <Group>
              <Avatar radius="xl" />
              <Box sx={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {getUserFullName(currentUser)}
                </Text>
                <Text color="dimmed" size="xs">
                  {currentUser?.email}
                </Text>
              </Box>

              <IconChevronRight size={rem(18)} />
            </Group>
          </UnstyledButton>
        </Box>
      </NavbarBase.Section>
    </NavbarBase>
  );
};
