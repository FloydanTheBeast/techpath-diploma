import React from 'react';

import { Drawer, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { Nullable } from '@shared/types';
import _ from 'lodash';
import ReactFlow, { Controls, Background, Edge, NodeMouseHandler } from 'reactflow';

import { ROADMAP_NODE_TYPES } from 'src/constants';
import { RoadmapNode } from 'src/types';
import { isNodeOfKnownType } from 'src/utils';

import { NodeViewer } from './components';

type RoadmapViewerProps = {
  nodes: RoadmapNode[];
  edges: Edge[];
  loading?: boolean;
};

export const RoadmapViewer: React.FC<RoadmapViewerProps> = ({ nodes, edges, loading }) => {
  const [selectedNode, setSelectedNode] = React.useState<Nullable<RoadmapNode>>();

  const [opened, { open, close }] = useDisclosure(false);

  const onNodeClick: NodeMouseHandler = React.useCallback((_, node) => {
    if (isNodeOfKnownType(node)) {
      setSelectedNode(node);
    }
  }, []);

  React.useEffect(() => {
    if (!_.isNil(selectedNode)) open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  return (
    <ReactFlow
      nodeTypes={ROADMAP_NODE_TYPES}
      nodes={nodes}
      edges={edges}
      fitView
      contentEditable={false}
      onNodeClick={onNodeClick}
    >
      <LoadingOverlay visible={Boolean(loading)} />
      <Controls />
      <Background />
      <Drawer position="right" opened={opened} onClose={close} size="lg">
        {selectedNode && <NodeViewer node={selectedNode} />}
      </Drawer>
    </ReactFlow>
  );
};
