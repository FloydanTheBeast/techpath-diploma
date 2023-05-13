import React from 'react';

import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Flex,
  Group,
  Menu,
  Stack,
  Sx,
  Text,
  rem,
} from '@mantine/core';
import { CourseInfoFragment } from '@shared/graphql';
import { IconCopy, IconDots, IconPlus } from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { RouteEntityType, appRoutes } from 'src/constants';

import { CoursePlatformLogo } from '../CoursePlatformLogo';

import { COURSE_CARD_HEIGHT } from './constants';

type CourseCardProps = {
  course: CourseInfoFragment;
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card
      bg="white"
      radius="md"
      p="md"
      shadow="sm"
      sx={cardStyles}
      component={Link}
      to={generatePath(appRoutes.courses.details, { [RouteEntityType.course]: course.id })}
    >
      <Card.Section withBorder inheritPadding py="xs" mb={16}>
        <Group position="apart">
          <CoursePlatformLogo logoUrl={course.platform?.logoUrl} />
          <Flex>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                  <IconDots size="1.25rem" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconPlus size={rem(14)} />} disabled>
                  Add
                </Menu.Item>
                <Menu.Item icon={<IconCopy size={rem(14)} />}>Copy link to clipboard</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Group>
      </Card.Section>
      <Stack spacing={8} sx={cardPrimaryContentStyles}>
        <Box>
          <Text size="h3" fw={500} lineClamp={2}>
            {course.title}
          </Text>
        </Box>
        <Text color="dimmed" size="sm">
          {course.description}
        </Text>
      </Stack>
      <Card.Section p="md">
        <Flex wrap="wrap" gap={8} mah={76} sx={{ overflow: 'hidden' }}>
          {course?.tags.map(tag => (
            <Badge key={tag.id} variant="dot" size="sm">
              {tag.name}
            </Badge>
          ))}
        </Flex>
      </Card.Section>
    </Card>
  );
};

const cardStyles: Sx = theme => ({
  height: COURSE_CARD_HEIGHT,
  display: 'flex',
  flexFlow: 'column nowrap',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: `1px solid ${theme.colors.gray[1]}`,
  '&:hover': {
    borderColor: theme.colors.gray[2],
    boxShadow: theme.shadows.lg,
  },
});

const cardPrimaryContentStyles: Sx = {
  flex: '0 1 100%',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)',
  },
};
