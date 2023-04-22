import React from 'react';

import { Paper, Title } from '@mantine/core';

type ContentPageLayoutProps = {
  title?: string;
};

export const ContentPageLayout: React.FC<React.PropsWithChildren<ContentPageLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <Paper shadow="xl" sx={{ height: '100%', padding: 32 }}>
      <Title mb="1rem">{title}</Title>
      {children}
    </Paper>
  );
};
