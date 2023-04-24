import React from 'react';

import { Card, Group, Image, Text, createStyles, rem } from '@mantine/core';
import { CourseInfoFragment } from '@shared/graphql';

import { CourseBackgroundImageUrl } from 'src/assets';

import { CoursePlatformLogo } from '../CoursePlatformLogo';

type CourseCardProps = {
  course: CourseInfoFragment;
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { classes } = useStyles();

  console.log(CourseBackgroundImageUrl.default);
  return (
    <Card withBorder bg="white" radius="md" p="md">
      <Card.Section>
        <Image src={CourseBackgroundImageUrl.default} height={120} />
      </Card.Section>
      <Card.Section mt={8} className={classes.section}>
        <Text fz="md" fw={500} lineClamp={2}>
          {course.title}
        </Text>
        <Text size="xs" lineClamp={3}>
          {course.description}
        </Text>
      </Card.Section>
      <Card.Section className={classes.section} mt={8}>
        <Text size="xs" weight={600} mb={8}>
          Provided by:
        </Text>
        <Group>
          <CoursePlatformLogo logoUrl={course.platform?.logoUrl} />
          <Text size="xs">{course.platform?.name}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
};

const useStyles = createStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));
