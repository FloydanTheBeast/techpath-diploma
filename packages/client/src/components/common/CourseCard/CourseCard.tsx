import React from 'react';

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Menu,
  Rating,
  Stack,
  Sx,
  Text,
} from '@mantine/core';
import { CourseInfoFragment } from '@shared/graphql';
import { clearHtml } from '@shared/utils';
import {
  IconCopy,
  IconDots,
  IconExternalLink,
  IconLanguage,
  IconPlus,
  IconWallet,
} from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { DifficultyBadge } from 'src/components';
import { RouteEntityType, appRoutes } from 'src/constants';

import { CoursePlatformLogo } from '../CoursePlatformLogo';

import { COURSE_CARD_HEIGHT } from './constants';

type CourseCardProps = {
  course: CourseInfoFragment;
  renderCustomActions?: () => React.ReactNode;
};

export const CourseCard: React.FC<CourseCardProps> = ({ course, renderCustomActions }) => {
  return (
    <Card bg="white" radius="md" p="md" shadow="sm" sx={cardStyles}>
      <Card.Section withBorder inheritPadding py="xs" mb={16}>
        <Group position="apart">
          <Group>
            <CoursePlatformLogo logoUrl={course.platform?.logoUrl} />
            <DifficultyBadge difficulty={course.difficulty} />
            <Badge
              variant="outline"
              pl={4}
              pr={8}
              leftSection={<IconLanguage display="flex" size="1rem" />}
            >
              {course?.languages[0]?.countryCodeISO}
            </Badge>
          </Group>
          <Flex>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                  <IconDots size="1.25rem" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                {renderCustomActions?.()}
                <Menu.Item icon={<IconPlus size="1rem" />} disabled>
                  Add to
                </Menu.Item>
                <Menu.Item icon={<IconCopy size="1rem" />}>Copy link to clipboard</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Group>
        <Group spacing={4} mt="xs">
          <Rating
            size="xs"
            value={course.reviewsAggregate?.node?.rating.average ?? 0}
            fractions={2}
            readOnly
          />
          <Text color="dimmed" weight={300} size="sm">
            ({course.reviewsAggregate?.count ?? 0})
          </Text>
        </Group>
      </Card.Section>
      <Stack spacing={8} sx={cardPrimaryContentStyles}>
        <Box>
          <Text size="h3" fw={500} lineClamp={2}>
            {course.title}
          </Text>
        </Box>
        <Text
          color="dimmed"
          size="sm"
          sx={{ '& *:first-child': { marginTop: 0 } }}
          // dangerouslySetInnerHTML={{ __html: course.description ?? '' }}
        >
          {clearHtml(course.description)}
        </Text>
      </Stack>
      <Card.Section p="md">
        <Flex wrap="wrap" gap={8} mah={76} sx={{ overflow: 'hidden' }}>
          {course.price?.price && (
            <Badge
              pl={4}
              pr={8}
              leftSection={<IconWallet display="flex" size="1rem" />}
              size="md"
              radius="xl"
              color="teal"
            >
              {course.price?.price} {course.price?.currencyCodeISO}
            </Badge>
          )}
          {course?.tags.map(tag => (
            <Badge key={tag.id} variant="dot" size="md">
              {tag.name}
            </Badge>
          ))}
        </Flex>
      </Card.Section>
      <Center>
        <Button
          compact
          fullWidth
          variant="light"
          component={Link}
          to={generatePath(appRoutes.courses.details, { [RouteEntityType.course]: course.id })}
          leftIcon={<IconExternalLink size="1rem" />}
        >
          View details
        </Button>
      </Center>
    </Card>
  );
};

const cardStyles: Sx = theme => ({
  height: COURSE_CARD_HEIGHT,
  display: 'flex',
  flexFlow: 'column nowrap',
  transition: 'all 0.2s',
  border: `1px solid ${theme.colors.gray[1]}`,
  '&:hover': {
    borderColor: theme.colors.gray[3],
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
