import React from 'react';

import {
  Avatar,
  Badge,
  Card,
  Flex,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useGetRoadmapByIdQuery } from '@shared/graphql';
import { IconLanguage } from '@tabler/icons-react';
import _ from 'lodash';
import { useParams } from 'react-router';

import { ContentPageLayout, DifficultyBadge, RoadmapViewer } from 'src/components';
import { RouteEntityType } from 'src/constants';
import { mapGqlRoadmapNodes } from 'src/utils';

import { NotFoundPage } from '../NotFoundPage';

export const RoadmapDetailsPage: React.FC = () => {
  const { roadmapId } = useParams<{ [RouteEntityType.roadmap]: string }>();
  const { data, loading: loadingRoadmap } = useGetRoadmapByIdQuery({
    variables: {
      id: roadmapId as string,
    },
    skip: !roadmapId,
  });

  const roadmap = data?.roadmaps[0];

  if (!loadingRoadmap && _.isNil(roadmap)) {
    return <NotFoundPage />;
  }

  return (
    <ContentPageLayout title={roadmap?.title || 'Roadmap details'}>
      <Stack>
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
    </ContentPageLayout>
  );
};
