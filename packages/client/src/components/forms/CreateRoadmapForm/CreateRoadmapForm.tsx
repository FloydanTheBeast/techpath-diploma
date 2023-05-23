import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Card,
  Center,
  Flex,
  MultiSelect,
  Select,
  SelectItem,
  Skeleton,
  Stack,
  TextInput,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  Difficulty,
  GetRoadmapsDocument,
  useCreateRoadmapMutation,
  useGetTopicTagsQuery,
} from '@shared/graphql';
import { IconCheck, IconHash, IconLanguage, IconStairsUp, IconX } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { InferType } from 'yup';

import { FormField, RichTextEditor, RoadmapBuilder } from 'src/components';
import { appRoutes } from 'src/constants';

import { createRoadmapValidationSchema } from './constants';
import { prepareFormData } from './utils';

export const CreateRoadmapForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<InferType<typeof createRoadmapValidationSchema>>({
    resolver: yupResolver(createRoadmapValidationSchema),
  });
  const [createRoadmap] = useCreateRoadmapMutation();

  const onSubmit: SubmitHandler<
    InferType<typeof createRoadmapValidationSchema>
  > = async formData => {
    try {
      await createRoadmap({
        variables: {
          data: prepareFormData(formData),
        },
        refetchQueries: [GetRoadmapsDocument],
        awaitRefetchQueries: true,
      });

      notifications.show({
        title: 'Success',
        message: 'Roadmap has been created',
        color: 'green',
        withCloseButton: true,
        icon: <IconCheck />,
        withBorder: true,
      });
    } catch (error) {
      notifications.show({
        title: 'Something went wrong',
        message: error.message,
        color: 'red',
        withCloseButton: true,
        icon: <IconX />,
        withBorder: true,
      });
      console.log(error);
      return;
    }

    navigate(appRoutes.roadmaps.index);
  };

  const { data: topicTagsData, loading: loadingTopicTags } = useGetTopicTagsQuery();

  const topicTags = React.useMemo(
    (): SelectItem[] =>
      topicTagsData?.topicTags.map(tag => ({
        value: tag.id,
        label: tag.name,
        // selected: true,
      })) ?? [],
    [topicTagsData?.topicTags],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack align="center">
        <Card h={800} w="100%" withBorder p={0}>
          <RoadmapBuilder {...register('roadmap')} control={control} />
        </Card>
        <Flex w={800} justify="center" direction="column" gap="md">
          <FormField
            component={TextInput}
            fieldProps={{
              ...register('title'),
              control,
              label: 'Title',
              withAsterisk: true,
            }}
          />
          <RichTextEditor
            label="Description"
            editable
            minHeight={250}
            maxHeight={500}
            placeholder="Put description here"
            onChange={value => setValue('description', value)}
          />
          <Flex justify="space-between" gap="md">
            <FormField
              component={Select}
              fieldProps={{
                ...register('difficulty'),
                control,
                label: 'Difficulty',
                data: Object.values(Difficulty),
                clearable: true,
                onChange: value => setValue('difficulty', value as Difficulty),
                icon: <IconStairsUp size="1rem" />,
                withAsterisk: true,
                sx: { flexGrow: 1 },
              }}
            />
            <FormField
              component={Select}
              fieldProps={{
                ...register('countryCodeISO'),
                control,
                label: 'Language',
                data: ['ru', 'en', 'es', 'de', 'fr'], // FIXME: Use name, move to constants
                clearable: true,
                onChange: value => setValue('countryCodeISO', value as any), // FIXME
                icon: <IconLanguage size="1rem" />,
                withAsterisk: true,
                sx: { flexGrow: 1 },
              }}
            />
          </Flex>
          {loadingTopicTags ? (
            <Skeleton w="100%" h={60} />
          ) : (
            <FormField
              component={MultiSelect}
              fieldProps={{
                ...register('topicTagsIds'),
                sx: { textTransform: 'capitalize' },
                searchable: true,
                clearable: true,
                control,
                label: 'Topics',
                data: topicTags,
                nothingFound: 'Nothing was found',
                onChange: value => setValue('topicTagsIds', value),
                icon: <IconHash size="1rem" />,
              }}
            />
          )}
          <Center>
            <Button type="submit" loading={isSubmitting}>
              Submit
            </Button>
          </Center>
        </Flex>
      </Stack>
    </form>
  );
};
