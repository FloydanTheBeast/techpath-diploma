import React from 'react';

import { Button, Flex, Group, Title } from '@mantine/core';
import {
  IconCircleArrowLeftFilled,
  IconCircleKey,
  IconCircleKeyFilled,
  IconKey,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useCurrentUser } from 'src/hooks';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useCurrentUser();

  return (
    <Flex align="center" justify="center" direction="column" sx={{ height: '100vh' }}>
      <Title variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} mb={16}>
        404. Not found
      </Title>
      <Group>
        <Button
          onClick={() => navigate(-1)}
          variant="light"
          leftIcon={<IconCircleArrowLeftFilled stroke={1} size="1.25rem" />}
        >
          Go back
        </Button>
        {!isAuthorized && (
          <Button
            onClick={() => navigate(appRoutes.auth.index)}
            variant="light"
            rightIcon={<IconCircleKeyFilled stroke={1} size="1.25rem" />}
          >
            Go to login page
          </Button>
        )}
      </Group>
    </Flex>
  );
};
