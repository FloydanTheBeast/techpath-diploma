import React from 'react';

import { AppShell, LoadingOverlay } from '@mantine/core';

import { useAuth } from 'src/hooks';

import { Navbar } from './components';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { loadingCurrentUser } = useAuth();

  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <LoadingOverlay visible={loadingCurrentUser}>{children}</LoadingOverlay>
    </AppShell>
  );
};
