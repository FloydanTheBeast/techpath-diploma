import React from 'react';

import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Paper,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useGetCoursesQuery } from '@shared/graphql';
import { IconExternalLink } from '@tabler/icons-react';
import { useParams } from 'react-router';

import { ContentPageLayout, CoursePlatformLogo } from 'src/components';
import { RouteEntityType } from 'src/constants';

export const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams<{ [RouteEntityType.course]: string }>();
  const { data, loading: loadingCourse } = useGetCoursesQuery({
    variables: {
      where: { id: courseId },
    },
  });

  const course = data?.courses[0];

  return (
    <ContentPageLayout title={course?.title}>
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
          <Skeleton h={300} w={400} />
        ) : (
          <Paper withBorder shadow="sm" p={16} w={400}>
            <Stack>
              <Stack spacing={8}>
                <Title size="h3">Platform</Title>
                <Flex align="center" gap={16}>
                  <CoursePlatformLogo logoUrl={course?.platform?.logoUrl} />
                  <Text>{course?.platform?.name}</Text>
                </Flex>
              </Stack>
              <Divider variant="dashed" />
              <Stack spacing={8}>
                <Title size="h3">Topics</Title>
                <Flex gap={8}>
                  {course?.tags.map(tag => (
                    <Badge key={tag.id} variant="dot" size="md">
                      {tag.name}
                    </Badge>
                  ))}
                </Flex>
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
