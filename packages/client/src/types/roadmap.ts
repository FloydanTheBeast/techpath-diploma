import type { Nullable } from '@shared/types';
import type { Node } from 'reactflow';

export enum RoadmapNodeType {
  basic = 'basic',
}

export type RoadmapNodeData = {
  title: string;
  description?: Nullable<string>;
  courses?: any[];
};

export type RoadmapNode = Node<RoadmapNodeData, RoadmapNodeType>;
