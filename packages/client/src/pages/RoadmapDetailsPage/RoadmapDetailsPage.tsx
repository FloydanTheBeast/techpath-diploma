import React from 'react';

import {
  Avatar,
  Badge,
  Card,
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
  GetRoadmapByIdDocument,
  useCreateUserReviewsMutation,
  useGetRoadmapByIdQuery,
} from '@shared/graphql';
import { IconLanguage } from '@tabler/icons-react';
import _ from 'lodash';
import { useParams } from 'react-router';

import { ContentPageLayout, DifficultyBadge, ReviewsSection, RoadmapViewer } from 'src/components';
import { RouteEntityType } from 'src/constants';
import { useCurrentUser } from 'src/hooks';
import { mapGqlRoadmapNodes } from 'src/utils';

import { NotFoundPage } from '../NotFoundPage';

export const RoadmapDetailsPage: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const { roadmapId } = useParams<{ [RouteEntityType.roadmap]: string }>();
  const { data, loading: loadingRoadmap } = useGetRoadmapByIdQuery({
    variables: {
      id: roadmapId as string,
    },
    skip: !roadmapId,
  });
  const [createReviews] = useCreateUserReviewsMutation();

  const roadmap = data?.roadmaps[0];

  if (!loadingRoadmap && _.isNil(roadmap)) {
    return <NotFoundPage />;
  }

  return (
    <ContentPageLayout title={roadmap?.title || 'Roadmap details'}>
      <Stack mb={64}>
        <Card h={800} withBorder p={0}>
          <RoadmapViewer
            nodes={mapGqlRoadmapNodes(roadmap?.nodes ?? [])}
            edges={roadmap?.edges ?? []}
            loading={loadingRoadmap}
          />
        </Card>
        <Flex>
          {loadingRoadmap ? (
            <Skeleton h={300} mr={32} />
          ) : (
            <Stack w="100%">
              <Title order={3}>Description</Title>
              <Text>{roadmap?.description}</Text>
            </Stack>
          )}
          {loadingRoadmap ? (
            <Skeleton h={300} w={400} miw={400} />
          ) : (
            <Paper withBorder shadow="sm" p={16} w={400} miw={400} h="fit-content">
              <Stack>
                <Stack>
                  <Title order={3}>Topics</Title>
                  <Flex wrap="wrap" gap="xs">
                    {roadmap?.tags.length ? (
                      roadmap.tags.map(tag => (
                        <Badge key={tag.id} variant="dot">
                          {tag.name}
                        </Badge>
                      ))
                    ) : (
                      <Text>Not specified</Text>
                    )}
                  </Flex>
                </Stack>
                <Stack>
                  <Title order={3}>Rating</Title>
                  <Group spacing="xs">
                    <Rating
                      readOnly
                      fractions={2}
                      value={roadmap?.reviewsAggregate?.node?.rating.average ?? undefined}
                    />
                    <Text color="dimmed" weight={300}>
                      ({roadmap?.reviewsAggregate?.count})
                    </Text>
                  </Group>
                </Stack>
                <Stack align="start">
                  <Title order={3}>Difficulty</Title>
                  {roadmap?.difficulty ? (
                    <DifficultyBadge difficulty={roadmap.difficulty} />
                  ) : (
                    <Text>Not specified</Text>
                  )}
                </Stack>
                <Stack align="start">
                  <Title order={3}>Language</Title>
                  {roadmap?.languages[0] ? (
                    <Badge
                      variant="outline"
                      pl={4}
                      pr={8}
                      leftSection={<IconLanguage display="flex" size="1rem" />}
                    >
                      {roadmap?.languages[0].countryCodeISO}
                    </Badge>
                  ) : (
                    <Text>Not specified</Text>
                  )}
                </Stack>
                <Stack>
                  <Title order={3}>Created by</Title>
                  <Group>
                    <Avatar size="md" radius="xl" color="blue" />
                    <Text>
                      {roadmap?.createdBy.firstName} {roadmap?.createdBy.lastName}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Paper>
          )}
        </Flex>
      </Stack>
      <Stack>
        <Title order={3}>Reviews ({roadmap?.reviewsAggregate?.count})</Title>
        <ReviewsSection
          onSubmitReview={async values => {
            await createReviews({
              variables: {
                input: {
                  ...values,
                  user: { connect: { where: { node: { id: currentUser?.id } } } },
                  roadmap: { connect: { where: { node: { id: roadmap?.id } } } },
                },
              },
              refetchQueries: [GetRoadmapByIdDocument],
              awaitRefetchQueries: true,
            });
          }}
          refetchOnDelete={[GetRoadmapByIdDocument]}
          reviews={roadmap?.reviews ?? []}
        />
      </Stack>
    </ContentPageLayout>
  );
};
