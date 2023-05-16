import React from 'react';

import { Badge, Box, Button, Flex, Paper, Skeleton, Stack, Text, Title } from '@mantine/core';
import { useGetCoursesQuery } from '@shared/graphql';
import { IconExternalLink, IconLanguage, IconWallet } from '@tabler/icons-react';
import _ from 'lodash';
import { useParams } from 'react-router';

import { ContentPageLayout, CoursePlatformLogo, DifficultyBadge } from 'src/components';
import { RouteEntityType } from 'src/constants';

import { NotFoundPage } from '../NotFoundPage';

export const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams<{ [RouteEntityType.course]: string }>();
  const { data, loading: loadingCourse } = useGetCoursesQuery({
    variables: {
      where: { id: courseId },
    },
  });

  const course = data?.courses[0];

  if (!loadingCourse && _.isNil(course)) {
    return <NotFoundPage />;
  }

  return (
    <ContentPageLayout title={course?.title ?? 'Course details'}>
      <Flex>
        {loadingCourse ? (
          <Skeleton h={300} mr={32} />
        ) : (
          <Box mr={32} w="100%">
            {course?.description ? (
              <Text>{course?.description}</Text>
            ) : (
              <Text color="dimmed">This course doesn&apos;t have a description ¯\_(ツ)_/¯</Text>
            )}
          </Box>
        )}
        {loadingCourse ? (
          <Skeleton h={300} w={400} miw={400} />
        ) : (
          <Paper withBorder shadow="sm" p={16} w={400} miw={400} h="fit-content">
            <Stack>
              <Stack>
                <Title order={3}>Platform</Title>
                <Flex align="center" gap={16}>
                  <CoursePlatformLogo logoUrl={course?.platform?.logoUrl} />
                  <Text>{course?.platform?.name}</Text>
                </Flex>
              </Stack>
              <Stack spacing="md">
                {!!course?.tags.length && (
                  <React.Fragment>
                    <Title order={3}>Topics</Title>
                    <Flex gap={8} wrap="wrap">
                      {course?.tags.map(tag => (
                        <Badge key={tag.id} variant="dot" size="md">
                          {tag.name}
                        </Badge>
                      ))}
                    </Flex>
                  </React.Fragment>
                )}
                {course?.price && (
                  <Box>
                    <Badge
                      pl={4}
                      pr={8}
                      size="md"
                      radius="xl"
                      leftSection={<IconWallet display="flex" size="1rem" />}
                      color="teal"
                    >
                      {course.price.price} {course.price.currencyCodeISO}
                    </Badge>
                  </Box>
                )}
              </Stack>
              <Stack align="start">
                <Title order={3}>Difficulty</Title>
                {course?.difficulty ? (
                  <DifficultyBadge difficulty={course.difficulty} />
                ) : (
                  <Text>Not specified</Text>
                )}
              </Stack>
              <Stack align="start">
                <Title order={3}>Language</Title>
                {course?.languages[0] ? (
                  <Badge
                    variant="outline"
                    pl={4}
                    pr={8}
                    leftSection={<IconLanguage display="flex" size="1rem" />}
                  >
                    {course?.languages[0].countryCodeISO}
                  </Badge>
                ) : (
                  <Text>Not specified</Text>
                )}
              </Stack>
              <Button
                component="a"
                href={course?.url}
                target="_blank"
                variant="light"
                leftIcon={<IconExternalLink size="0.9rem" />}
              >
                {course?.url}
              </Button>
            </Stack>
          </Paper>
        )}
      </Flex>
    </ContentPageLayout>
  );
};
