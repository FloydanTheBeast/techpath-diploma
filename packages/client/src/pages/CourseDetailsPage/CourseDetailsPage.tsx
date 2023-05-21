import React from 'react';

import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Rating,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  GetCoursesDocument,
  useCreateUserReviewsMutation,
  useGetCoursesQuery,
} from '@shared/graphql';
import { IconExternalLink, IconLanguage, IconWallet } from '@tabler/icons-react';
import _ from 'lodash';
import { useParams } from 'react-router';

import {
  ContentPageLayout,
  CoursePlatformLogo,
  DifficultyBadge,
  ReviewsSection,
} from 'src/components';
import { RouteEntityType } from 'src/constants';
import { useCurrentUser } from 'src/hooks';

import { NotFoundPage } from '../NotFoundPage';

export const CourseDetailsPage: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const { courseId } = useParams<{ [RouteEntityType.course]: string }>();
  const { data, loading: loadingCourse } = useGetCoursesQuery({
    variables: {
      where: { id: courseId },
    },
  });
  const [createReviews] = useCreateUserReviewsMutation();

  const course = data?.courses[0];

  if (!loadingCourse && _.isNil(course)) {
    return <NotFoundPage />;
  }

  return (
    <ContentPageLayout title={course?.title ?? 'Course details'}>
      <Flex mb={64}>
        {loadingCourse ? (
          <Skeleton h={300} mr={32} />
        ) : (
          <Box mr={32} w="100%">
            {course?.description ? (
              <Box dangerouslySetInnerHTML={{ __html: course?.description }} />
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
                <Title order={3}>Ratings</Title>
                <Stack spacing="sm">
                  <Group>
                    <Text>Internal:</Text>
                    <Group spacing="xs">
                      <Rating
                        readOnly
                        fractions={2}
                        value={course?.reviewsAggregate?.node?.rating.average ?? undefined}
                      />
                      <Text color="dimmed" weight={300}>
                        ({course?.reviewsAggregate?.count})
                      </Text>
                    </Group>
                  </Group>
                  <Group>
                    <Text>External:</Text>
                    <Group spacing="xs">
                      <Rating readOnly fractions={2} value={course?.externalRating ?? undefined} />
                      <Text color="dimmed" weight={300}>
                        ({course?.externalRatingsCount ?? 0})
                      </Text>
                    </Group>
                  </Group>
                </Stack>
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
      <Stack>
        <Title order={3}>Reviews ({course?.reviewsAggregate?.count})</Title>
        <ReviewsSection
          onSubmitReview={async values => {
            await createReviews({
              variables: {
                input: {
                  ...values,
                  user: { connect: { where: { node: { id: currentUser?.id } } } },
                  course: { connect: { where: { node: { id: course?.id } } } },
                },
              },
              refetchQueries: [GetCoursesDocument],
              awaitRefetchQueries: true,
            });
          }}
          refetchOnDelete={[GetCoursesDocument]}
          reviews={course?.reviews ?? []}
        />
      </Stack>
    </ContentPageLayout>
  );
};
