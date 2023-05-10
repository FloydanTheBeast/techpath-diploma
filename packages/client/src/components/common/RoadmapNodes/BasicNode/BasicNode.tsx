import React from 'react';

import { Card, Sx, Text } from '@mantine/core';
import { Handle, NodeProps, Position } from 'reactflow';

import { RoadmapNodeData } from 'src/types';

export const BasicNode: React.FC<NodeProps<RoadmapNodeData>> = ({ data, selected }) => {
  return (
    <React.Fragment>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} id="out" />
      <Card sx={nodeContainerStyles(selected)}>
        <Text>{data.title}</Text>
      </Card>
    </React.Fragment>
  );
};

const nodeContainerStyles =
  (selected: boolean): Sx =>
  theme => ({
    border: `2px solid ${selected ? theme.colors.blue['5'] : theme.colors.gray['2']}`,
  });
