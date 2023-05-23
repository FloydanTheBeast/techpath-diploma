import React from 'react';

import {
  ActionIcon,
  Alert,
  Autocomplete,
  Button,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useGetCoursesQuery } from '@shared/graphql';
import { IconAlertCircle, IconExternalLink, IconX } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { generatePath } from 'react-router';
import { useReactFlow } from 'reactflow';

import { CoursePlatformLogo, FormField, RichTextEditor } from 'src/components/common';
import { RouteEntityType, appRoutes } from 'src/constants';
import { useDebounce } from 'src/hooks';
import { RoadmapNode, RoadmapNodeData } from 'src/types';
import { getSearchQueryOption } from 'src/utils';

import { CourseSelectItem, CourseSelectItemProps } from './components';

type NodeEditorProps = {
  node: RoadmapNode;
};

export const NodeEditor: React.FC<NodeEditorProps> = ({ node }) => {
  const [courseSearchValue, setCourseSearchValue] = React.useState('');

  const { setCenter, getZoom, setNodes } = useReactFlow();
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: { errors, defaultValues },
  } = useForm<RoadmapNodeData>({
    defaultValues: React.useMemo(() => node.data, [node]),
  });

  const debouncedCourseSearchValue = useDebounce(courseSearchValue, 500);

  const { data: coursesData } = useGetCoursesQuery({
    variables: {
      where: getSearchQueryOption(debouncedCourseSearchValue, ['id', 'title', 'description']),
    },
  });

  const foundCourses = coursesData?.courses;

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
        <Autocomplete
          label="Suggested courses"
          value={courseSearchValue}
          onChange={setCourseSearchValue}
          onItemSubmit={(course: CourseSelectItemProps) => {
            console.log(course);
            setValue('suggestedCourses', [...(suggestedCourses ?? []), course]);
            setCourseSearchValue('');
          }}
          limit={10}
          itemComponent={CourseSelectItem}
          filter={(_, item) =>
            (suggestedCourses ?? []).findIndex(course => course.value === item.value) === -1
          }
          data={
            foundCourses?.map(course => ({
              value: course.id,
              title: course.title,
              platformLogo: course.platform?.logoUrl,
            })) ?? []
          }
        />
        {suggestedCourses?.map(course => (
          <Card key={course.value} withBorder p={24}>
            <Flex gap={16} align="center" pos="relative">
              <CoursePlatformLogo logoUrl={course.platformLogo} />
              <Text>{course.title}</Text>
            </Flex>
            <ActionIcon
              sx={{ position: 'absolute', top: 4, right: 4 }}
              onClick={() =>
                setValue(
                  'suggestedCourses',
                  suggestedCourses.filter(
                    suggestedCourse => suggestedCourse.value !== course.value,
                  ),
                )
              }
            >
              <IconX size="1rem" />
            </ActionIcon>
            <ActionIcon
              sx={{ position: 'absolute', top: 4, right: 30 }}
              component="a"
              href={generatePath(appRoutes.courses.details, {
                [RouteEntityType.course]: course.value,
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
