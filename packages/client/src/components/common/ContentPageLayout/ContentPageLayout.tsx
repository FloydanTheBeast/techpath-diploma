import React from 'react';

import { Group, Paper, Title } from '@mantine/core';

type ContentPageLayoutProps = {
  title?: string;
  headerRightElement?: React.ReactElement;
};

export const ContentPageLayout: React.FC<React.PropsWithChildren<ContentPageLayoutProps>> = ({
  title,
  children,
  headerRightElement,
}) => {
  return (
    <Paper shadow="xl" sx={{ height: '100%', padding: 32 }}>
      <Group position="apart">
        <Title mb="1rem">{title}</Title>
        {headerRightElement}
      </Group>
      {children}
    </Paper>
  );
};
