import React from 'react';

import { Button, Flex, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useCurrentUser } from 'src/hooks';

import { AdminAppLayout } from '../AdminAppLayout';
import { UserAppLayout } from '../UserAppLayout';

export const LayoutResolver: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { permissions } = useCurrentUser();
  let Layout: React.ComponentType<React.PropsWithChildren> = React.Fragment;

  if (Object.values(permissions).every(permission => !permission)) {
    return (
      <Flex align="center" justify="center" direction="column" sx={{ height: '100vh' }}>
        <Title variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} mb={16}>
          Great to see you!
        </Title>
        <Button component={Link} to={appRoutes.auth.index} variant="light">
          Go to login page
        </Button>
      </Flex>
    );
  }

  if (permissions.isAdmin) {
    Layout = AdminAppLayout;
  }
  if (permissions.isUser) {
    Layout = UserAppLayout;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Layout>{children}</Layout>;
};
