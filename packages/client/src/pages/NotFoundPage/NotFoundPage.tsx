import React from 'react';

import { Button, Flex, Title } from '@mantine/core';
import { IconCircleArrowLeftFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex align="center" justify="center" direction="column" sx={{ height: '100vh' }}>
      <Title variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} mb={16}>
        404. Not found
      </Title>
      <Button
        onClick={() => navigate(-1)}
        variant="light"
        leftIcon={<IconCircleArrowLeftFilled stroke={1} size="1rem" />}
      >
        Go back
      </Button>
    </Flex>
  );
};
