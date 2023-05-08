import { ActionIcon, Box, Button, Sx } from '@mantine/core';
import { IconDatabasePlus, IconPlus } from '@tabler/icons-react';
import { useReactFlow } from 'reactflow';
import { v4 as uuid } from 'uuid';

import { RoadmapNodeData, RoadmapNodeType } from 'src/types';

type CustomControlsProps = {
  reactFlowRef: React.RefObject<HTMLDivElement>;
};

export const CustomControls: React.FC<CustomControlsProps> = ({ reactFlowRef }) => {
  const { addNodes } = useReactFlow<RoadmapNodeData>();

  const onNodeAdd = () => {
    console.log(reactFlowRef.current?.clientHeight, reactFlowRef.current?.clientWidth);
    const x = Math.random() * (reactFlowRef.current?.clientWidth ?? 0);
    const y = Math.random() * (reactFlowRef.current?.clientHeight ?? 0);

    addNodes({
      id: uuid(),
      type: RoadmapNodeType.basic,
      position: { x, y },
      data: { title: '' },
    });
  };

  return (
    <Box sx={customControlsContainerStyles}>
      <ActionIcon variant="light" color="blue" onClick={onNodeAdd}>
        <IconDatabasePlus />
      </ActionIcon>
    </Box>
  );
};

const customControlsContainerStyles: Sx = {
  position: 'absolute',
  zIndex: 4,
  top: 8,
  left: 8,
};
