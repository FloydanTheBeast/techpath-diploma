import React from 'react';

import {
  ActionIcon,
  Alert,
  Button,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useGetCoursesLazyQuery } from '@shared/graphql';
import { IconAlertCircle, IconExternalLink, IconPlus, IconX } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { generatePath } from 'react-router';
import { useReactFlow } from 'reactflow';

import { CoursePlatformLogo, FormField, RichTextEditor } from 'src/components/common';
import { RouteEntityType, appRoutes } from 'src/constants';
import { RoadmapNode, RoadmapNodeData } from 'src/types';

type NodeEditorProps = {
  node: RoadmapNode;
};

export const NodeEditor: React.FC<NodeEditorProps> = ({ node }) => {
  const [suggestedCourseId, setSugggestedCourseId] = React.useState<string>('');

  const { setCenter, getZoom, setNodes } = useReactFlow();
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    setError,
    watch,
    clearErrors,
    formState: { errors, defaultValues },
  } = useForm<RoadmapNodeData>({
    defaultValues: React.useMemo(() => node.data, [node]),
  });
  const [getCourses, { loading: loadingCourses }] = useGetCoursesLazyQuery();

  // React.useEffect(() => {
  //   setCenter(
  //     node.position.x + (node.width ?? 0) / 2 + EDITOR_WIDTH / 4,
  //     node.position.y + (node.height ?? 0) / 2,
  //     {
  //       zoom: Math.max(1, getZoom()),
  //     },
  //   );
  // }, [setCenter, node.position.x, node.position.y, node.width, node.height, getZoom]);

  const suggestedCourses = watch('suggestedCourses');

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

  const handleAddSuggestedCourse = async () => {
    const { data } = await getCourses({ variables: { where: { id: suggestedCourseId } } });
    const course = data?.courses[0];

    if (!course) {
      setError('suggestedCourses', { message: "Course with provided ID doesn't exist" });
      return;
    }

    if (
      suggestedCourses &&
      suggestedCourses.findIndex(suggestedCourse => suggestedCourse.id === course.id) !== -1
    ) {
      setError('suggestedCourses', { message: 'Course with provided ID is already added' });
      return;
    }

    setValue('suggestedCourses', [...(suggestedCourses ?? []), course]);
    setSugggestedCourseId('');
  };

  React.useEffect(() => {
    reset(node.data, { keepDefaultValues: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node.data]);

  return (
    <form
      onSubmit={event => {
        event.stopPropagation();
        handleSubmit(onSubmit)(event);
      }}
    >
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
        <RichTextEditor
          label="Description"
          editable
          minHeight={150}
          maxHeight={300}
          content={defaultValues?.description ?? undefined}
          placeholder="Put description here"
          onChange={value => setValue('description', value)}
        />
        {errors['suggestedCourses'] && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            withCloseButton
            onClose={() => clearErrors('suggestedCourses')}
            title="Error"
            color="red"
            variant="filled"
          >
            {errors['suggestedCourses']?.message}
          </Alert>
        )}
        <TextInput
          label="Suggested courses"
          placeholder="Course ID"
          value={suggestedCourseId}
          onChange={({ target }) => setSugggestedCourseId(target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddSuggestedCourse();
            }
          }}
          disabled={(suggestedCourses?.length ?? 0) >= 5}
          rightSection={
            <ActionIcon
              disabled={(suggestedCourses?.length ?? 0) >= 5}
              size="1.25rem"
              onClick={handleAddSuggestedCourse}
              loading={loadingCourses}
            >
              <IconPlus />
            </ActionIcon>
          }
        />
        {suggestedCourses?.map(course => (
          <Card key={course.id} withBorder p={24}>
            <Flex gap={16} align="center" pos="relative">
              <CoursePlatformLogo logoUrl={course.platform?.logoUrl} />
              <Text>{course.title}</Text>
            </Flex>
            <ActionIcon
              sx={{ position: 'absolute', top: 4, right: 4 }}
              onClick={() =>
                setValue(
                  'suggestedCourses',
                  suggestedCourses.filter(suggestedCourse => suggestedCourse.id !== course.id),
                )
              }
            >
              <IconX size="1rem" />
            </ActionIcon>
            <ActionIcon
              sx={{ position: 'absolute', top: 4, right: 30 }}
              component="a"
              href={generatePath(appRoutes.courses.details, {
                [RouteEntityType.course]: course.id,
              })}
              target="_blank"
            >
              <IconExternalLink size="1rem" />
            </ActionIcon>
          </Card>
        ))}
        <Group spacing="1rem" position="center">
          {/* FIXME: Close editor */}
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
