import { RoadmapNodeInfoFragment } from '@shared/graphql';

import { RoadmapNode, RoadmapNodeType } from 'src/types';

export const mapGqlRoadmapNodes = (nodes: RoadmapNodeInfoFragment[]): RoadmapNode[] => {
  return nodes.map(node => ({
    id: node.id,
    type: node.type as RoadmapNodeType,
    data: {
      title: node.title,
      description: node.description,
    },
    position: { x: node.positionX, y: node.positionY },
  }));
};
