import React from 'react';

import { LoadingOverlay } from '@mantine/core';
import ReactFlow, { Controls, Background, Edge } from 'reactflow';

import { ROADMAP_NODE_TYPES } from 'src/constants';
import { RoadmapNode } from 'src/types';

type RoadmapViewerProps = {
  nodes: RoadmapNode[];
  edges: Edge[];
  loading?: boolean;
};

export const RoadmapViewer: React.FC<RoadmapViewerProps> = ({ nodes, edges, loading }) => {
  return (
    <ReactFlow
      nodeTypes={ROADMAP_NODE_TYPES}
      nodes={nodes}
      edges={edges}
      fitView
      contentEditable={false}
    >
      <LoadingOverlay visible={Boolean(loading)} />
      <Controls />
      <Background />
    </ReactFlow>
  );
};
