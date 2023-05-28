import React from 'react';

import { Card, Sx, Text, useMantineTheme } from '@mantine/core';
import { Handle, NodeProps, Position } from 'reactflow';

import { RoadmapNodeData } from 'src/types';

export const BasicNode: React.FC<NodeProps<RoadmapNodeData>> = ({ data, selected }) => {
  const theme = useMantineTheme();

  return (
    <React.Fragment>
      <Handle
        type="target"
        position={Position.Left}
        style={{
          zIndex: 1,
          background: theme.colors.gray[4],
          height: 16,
          width: 5,
          borderRadius: 4,
          marginRight: 1,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        style={{
          zIndex: 1,
          background: theme.colors.blue[4],
          height: 16,
          width: 5,
          borderRadius: 4,
          marginRight: 1,
        }}
      />
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
