import React from 'react';

import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Nullable } from '@shared/types';
import _ from 'lodash';
import { Control, useController } from 'react-hook-form';
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  Background,
  Controls,
  Edge,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  OnNodesDelete,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
  NodeMouseHandler,
  OnConnectStart,
  OnConnectEnd,
} from 'reactflow';
import { v4 as uuid } from 'uuid';

import { ROADMAP_NODE_TYPES } from 'src/constants';
import { RoadmapNode, RoadmapNodeData, RoadmapNodeType } from 'src/types';
import { isNodeOfKnownType } from 'src/utils';

import { NodeEditor } from './components';

type RoadmapBuilderProps = {
  name: string;
  control: Control<any, unknown>;
};

const initialNodes: RoadmapNode[] = [
  {
    id: uuid(),
    type: RoadmapNodeType.basic,
    position: { x: 0, y: 50 },
    deletable: false,
    data: { title: 'Initial node' },
  },
];

const RoadmapBuilderInner: React.FC<RoadmapBuilderProps> = ({ name, control }) => {
  const [nodes, setNodes] = React.useState<RoadmapNode[]>(initialNodes);
  const [edges, setEdges] = React.useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = React.useState<Nullable<RoadmapNode>>();

  const [opened, { open, close }] = useDisclosure(false);
  const { field } = useController({ name, control });
  const { project } = useReactFlow<RoadmapNodeData>();

  const reactFlowRef = React.useRef<HTMLDivElement>(null);
  const connectingNodeId = React.useRef<Nullable<string>>(null);

  const onNodesChange: OnNodesChange = React.useCallback(
    changes => {
      setNodes(nds => applyNodeChanges(changes, nds).filter(isNodeOfKnownType));
    },
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = React.useCallback(
    changes => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect: OnConnect = React.useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
  );

  const onNodesDelete: OnNodesDelete = React.useCallback(
    deleted => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(edge => !connectedEdges.includes(edge));

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target })),
          );

          return [...remainingEdges, ...createdEdges];
        }, edges),
      );
    },
    [nodes, edges],
  );

  const onConnectStart: OnConnectStart = React.useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd: OnConnectEnd = React.useCallback(
    event => {
      const targetIsPane = (event.target as Element)?.classList.contains('react-flow__pane');

      if (event instanceof MouseEvent && targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top = 0, left = 0 } = reactFlowRef?.current?.getBoundingClientRect() || {};

        console.log(top);
        const newNode: RoadmapNode = {
          id: uuid(),
          type: RoadmapNodeType.basic,
          // We are removing the half of the node width and height (15) to center the new node
          position: project({ x: event.clientX - left - 15, y: event.clientY - top - 15 }),
          data: { title: '' },
        };

        setNodes(nds => nds.concat(newNode));
        setEdges(eds =>
          eds.concat({
            id: newNode.id,
            source: connectingNodeId.current as string,
            target: newNode.id,
          }),
        );
      }
    },
    [project],
  );

  const onNodeClick: NodeMouseHandler = React.useCallback((_, node) => {
    if (isNodeOfKnownType(node)) {
      setSelectedNode(node);
    }
  }, []);

  React.useEffect(() => {
    if (!_.isNil(selectedNode)) open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  React.useEffect(() => {
    field.onChange({ nodes, edges });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges]);

  return (
    <ReactFlow
      ref={reactFlowRef}
      fitView
      nodeTypes={ROADMAP_NODE_TYPES}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      onNodesDelete={onNodesDelete}
      onNodeClick={onNodeClick}
      onPaneClick={() => setSelectedNode(null)}
      selectNodesOnDrag={false}
    >
      <Background />
      <Controls />
      <Drawer position="right" opened={opened} onClose={close} size="lg">
        {selectedNode && <NodeEditor node={selectedNode} />}
      </Drawer>
    </ReactFlow>
  );
};

export const RoadmapBuilder: React.FC<RoadmapBuilderProps> = props => {
  return (
    <ReactFlowProvider>
      <RoadmapBuilderInner {...props} />
    </ReactFlowProvider>
  );
};
