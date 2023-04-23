import React from 'react';

import { Container, Flex, Sx } from '@mantine/core';

export const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Flex sx={layoutContainerStyles} align="center">
      <Container size={420}>{children}</Container>
    </Flex>
  );
};

const layoutContainerStyles: Sx = {
  width: '100%',
  height: '100vh',
  background: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
};
