import { RoadmapNodeInfoFragment } from '@shared/graphql';
import { Nullable } from '@shared/types';
import type { Node } from 'reactflow';

import { RoadmapNode, RoadmapNodeType } from 'src/types';

export const mapGqlRoadmapNodes = (nodes: RoadmapNodeInfoFragment[]): RoadmapNode[] => {
  return nodes.map(node => ({
    id: node.id,
    type: node.type as RoadmapNodeType,
    data: {
      title: node.title,
      description: node.description,
      suggestedCourses: node.suggestedCourses,
    },
    position: { x: node.positionX, y: node.positionY },
  }));
};

export const isNodeOfKnownType = (node: Nullable<Node>): node is RoadmapNode => {
  return !!node?.type && Object.values<string>(RoadmapNodeType).includes(node.type);
};
