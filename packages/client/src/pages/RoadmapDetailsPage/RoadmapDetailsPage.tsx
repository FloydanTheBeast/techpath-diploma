import React from 'react';

import { Card, Stack, Text, Title } from '@mantine/core';
import { useGetRoadmapByIdQuery } from '@shared/graphql';
import _ from 'lodash';
import { useParams } from 'react-router';

import { ContentPageLayout, RoadmapViewer } from 'src/components';
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
        <Title size="h3">Description</Title>
        <Text>{roadmap?.description}</Text>
      </Stack>
    </ContentPageLayout>
  );
};
