import React from 'react';

import { Button, Group, Stack, TextInput, Textarea } from '@mantine/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useReactFlow } from 'reactflow';

import { FormField } from 'src/components/common';
import { RoadmapNode, RoadmapNodeData } from 'src/types';

type NodeEditorProps = {
  node: RoadmapNode;
};

const EDITOR_WIDTH = 500;

export const NodeEditor: React.FC<NodeEditorProps> = ({ node }) => {
  const { setCenter, getZoom, setNodes } = useReactFlow();
  const { register, control, handleSubmit, reset } = useForm<RoadmapNodeData>({
    defaultValues: React.useMemo(
      () => ({
        ...node.data,
        description: '',
      }),
      [node],
    ),
  });

  React.useEffect(() => {
    reset(node.data, { keepDefaultValues: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node.data]);

  // React.useEffect(() => {
  //   setCenter(
  //     node.position.x + (node.width ?? 0) / 2 + EDITOR_WIDTH / 4,
  //     node.position.y + (node.height ?? 0) / 2,
  //     {
  //       zoom: Math.max(1, getZoom()),
  //     },
  //   );
  // }, [setCenter, node.position.x, node.position.y, node.width, node.height, getZoom]);

  const onSubmit: SubmitHandler<RoadmapNodeData> = async data => {
    setNodes(nds =>
      nds.map(nd => {
        if (nd.id === node.id) {
          return {
            ...node,
            data: data,
          };
        }

        return nd;
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('title'),
            control,
            label: 'Title',
            required: true,
          }}
        />
        {/* TODO: Use WYSIWYG (rich-text editor) */}
        <FormField
          component={Textarea}
          fieldProps={{
            ...register('description'),
            control,
            label: 'Description',
            minRows: 8,
          }}
        />
        <Group spacing="1rem" position="center">
          <Button onClick={console.log} variant="outline" color="red">
            Cancel
          </Button>
          <Button type="submit" variant="light">
            Update
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
