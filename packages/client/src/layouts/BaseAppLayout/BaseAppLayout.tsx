import React from 'react';

import { AppShell, LoadingOverlay } from '@mantine/core';

import { useAuth } from 'src/hooks';
import type { NavbarLink } from 'src/types';

import { Navbar } from './components';

interface BaseAppLayoutProps {
  navbarLinks: NavbarLink[];
}

export const BaseAppLayout: React.FC<React.PropsWithChildren<BaseAppLayoutProps>> = ({
  children,
  navbarLinks,
}) => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar navbarLinks={navbarLinks} />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
