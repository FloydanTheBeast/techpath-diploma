import React from 'react';

import {
  Avatar,
  Box,
  Group,
  NavLink,
  Navbar as NavbarBase,
  Popover,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { getUserFullName } from '@shared/utils';
import { IconChevronRight, IconLogout, IconUser } from '@tabler/icons-react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { useAuth, useCurrentUser } from 'src/hooks';
import type { NavbarLink } from 'src/types';

interface NavbarProps {
  navbarLinks: NavbarLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ navbarLinks }) => {
  const { logout } = useAuth();
  const { currentUser } = useCurrentUser();
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
          <Popover position="right-end" width={200}>
            <Popover.Target>
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
            </Popover.Target>
            <Popover.Dropdown sx={{ width: 200 }}>
              {/* TODO */}
              <NavLink icon={<IconUser stroke={1} size="1rem" />} label="Profile" disabled />
              <NavLink
                icon={<IconLogout stroke={1} size="1rem" />}
                onClick={() => logout()}
                color="red"
                label="Log out"
                active
              />
            </Popover.Dropdown>
          </Popover>
        </Box>
      </NavbarBase.Section>
    </NavbarBase>
  );
};
