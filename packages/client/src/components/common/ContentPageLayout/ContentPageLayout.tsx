import React from 'react';

import { ActionIcon, Group, Paper, Sx, Title, Transition } from '@mantine/core';
import { IconChevronsUp } from '@tabler/icons-react';

type ContentPageLayoutProps = {
  title?: string;
  headerRightElement?: React.ReactElement;
};

// eslint-disable-next-line react/display-name
export const ContentPageLayout = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ContentPageLayoutProps>
>(({ title, children, headerRightElement }, ref) => {
  const [isScrollButtonShown, setIsScrollButtonShown] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = event => {
    setIsScrollButtonShown(
      ((event.target as HTMLDivElement)?.scrollTop ?? 0) > window.innerHeight + 300,
    );
  };

  return (
    <Paper
      onScroll={handleScroll}
      shadow="xl"
      sx={containerStyles}
      ref={node => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
    >
      <Group position="apart">
        <Title variant="gradient" mb="1rem">
          {title}
        </Title>
        {headerRightElement}
      </Group>
      {children}
      <Transition mounted={isScrollButtonShown} transition="slide-left">
        {styles => (
          <ActionIcon
            style={styles}
            sx={{ position: 'fixed', right: 40, bottom: 40 }}
            variant="filled"
            radius="xl"
            size="xl"
            onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <IconChevronsUp />
          </ActionIcon>
        )}
      </Transition>
    </Paper>
  );
});

const containerStyles: Sx = {
  height: '100%',
  padding: 32,
  overflowY: 'auto',
};
