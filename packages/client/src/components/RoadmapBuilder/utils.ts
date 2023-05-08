import { Nullable } from '@shared/types';
import type { Node } from 'reactflow';

import { RoadmapNode, RoadmapNodeType } from 'src/types';

export const isNodeOfKnownType = (node: Nullable<Node>): node is RoadmapNode => {
  return !!node?.type && Object.values<string>(RoadmapNodeType).includes(node.type);
};
