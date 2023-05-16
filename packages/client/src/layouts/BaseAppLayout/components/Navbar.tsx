import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Code,
  Group,
  Menu,
  NavLink,
  Navbar as NavbarBase,
  Sx,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import { getUserFullName } from '@shared/utils';
import {
  IconChevronRight,
  IconLogout,
  IconRoute,
  IconSearch,
  IconUserCircle,
} from '@tabler/icons-react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { useAuth, useCurrentUser } from 'src/hooks';
import type { NavbarLink } from 'src/types';

interface NavbarProps {
  navbarLinks: NavbarLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ navbarLinks }) => {
  const { permissions } = useCurrentUser();
  const { logout } = useAuth();
  const { currentUser } = useCurrentUser();
  const location = useLocation();

  return (
    <NavbarBase width={{ base: 300 }} p="xs">
      <NavbarBase.Section sx={headerSectionStyles}>
        <Group sx={headerStyles} position="apart">
          <Group>
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
          </Group>
          <Code sx={{ fontWeight: 700 }}>v{APP_VERSION}</Code>
        </Group>
      </NavbarBase.Section>
      <NavbarBase.Section grow>
        <Button
          fullWidth
          variant="default"
          placeholder="Search"
          size="xs"
          leftIcon={<IconSearch size="0.8rem" stroke={1.5} />}
          sx={theme => ({ color: theme.colors.gray[5] })}
          styles={{
            inner: { justifyContent: 'space-between' },
            label: { flexGrow: 1, fontWeight: 400 },
          }}
          rightIcon={<Code sx={searchCodeStyles}>Ctrl + K</Code>}
          mb="sm"
          onClick={() => spotlight.open()}
        >
          Search
        </Button>
        {navbarLinks.map(link => (
          <NavLink
            key={link.path}
            label={link.label}
            icon={
              <ThemeIcon color="blue" variant="light">
                <link.icon size="1.25rem" stroke={2} />
              </ThemeIcon>
            }
            component={Link}
            to={link.path}
            active={!!matchPath({ path: link.path, end: true }, location.pathname)}
            disabled={link.disabled}
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
          <Menu position="right-end" shadow="md" width={200} withArrow>
            <Menu.Target>
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
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              {/* TODO */}
              <Menu.Item icon={<IconUserCircle size={14} />} disabled>
                Profile
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} />} onClick={() => logout()} color="red">
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </NavbarBase.Section>
    </NavbarBase>
  );
};

const headerSectionStyles: Sx = theme => ({
  borderBottom: `${rem(1)} solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
  }`,
  marginBottom: `calc(${theme.spacing.md})`,
});

const headerStyles: Sx = theme => ({
  paddingBottom: theme.spacing.md,
});

const searchCodeStyles: Sx = theme => ({
  fontWeight: 700,
  fontSize: 10,
  border: `1px solid ${theme.colors.gray[2]}`,
});
