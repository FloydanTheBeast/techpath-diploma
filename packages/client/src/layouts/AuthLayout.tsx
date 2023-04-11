import React from 'react';

import { Container, Flex } from '@mantine/core';

export const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Flex sx={{ width: '100%', height: '100vh' }} align="center">
      <Container size={420}>{children}</Container>
    </Flex>
  );
};
