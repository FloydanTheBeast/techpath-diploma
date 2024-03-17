import React from 'react';

import { ActionIcon, Card, Flex, Stack, Text, Title } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { generatePath } from 'react-router';

import { CoursePlatformLogo, RichTextEditor } from 'src/components';
import { RouteEntityType, appRoutes } from 'src/constants';
import { RoadmapNode } from 'src/types';

type NodeViewerProps = {
  node: RoadmapNode;
};

export const NodeViewer: React.FC<NodeViewerProps> = ({ node }) => {
  return (
    <Stack>
      <Title order={2}>{node.data.title}</Title>
      {node.data.description && (
        <RichTextEditor content={node.data.description} editable={false} minHeight={0} />
      )}
      <Title order={4}>Suggested courses</Title>
      {node.data.suggestedCourses?.map(course => (
        <Card key={course.id} withBorder p={24}>
          <Flex gap={16} align="center" pos="relative">
            <CoursePlatformLogo logoUrl={course.platformLogo} />
            <Text>{course.title}</Text>
          </Flex>
          <ActionIcon
            sx={{ position: 'absolute', top: 4, right: 4 }}
            component="a"
            href={generatePath(appRoutes.courses.details, {
              [RouteEntityType.course]: course.value,
            })}
            target="_blank"
          >
            <IconExternalLink size="1rem" />
          </ActionIcon>
        </Card>
      ))}
    </Stack>
  );
};
