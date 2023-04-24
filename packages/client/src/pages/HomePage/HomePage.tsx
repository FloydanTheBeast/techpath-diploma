import React from 'react';

import { Button, Flex, Title } from '@mantine/core';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useCurrentUser } from 'src/hooks';

import { UserHomePage } from './UserHomePage';

export const HomePage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return <Navigate to={appRoutes.courses.index} replace />;
  }

  if (permissions.isUser) {
    return <UserHomePage />;
  }

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
};
