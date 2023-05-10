import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Center, Stack, TextInput, Textarea } from '@mantine/core';
import { useCreateRoadmapMutation } from '@shared/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { InferType } from 'yup';

import { FormField, RoadmapBuilder } from 'src/components';
import { appRoutes } from 'src/constants';

import { createRoadmapValidationSchema } from './constants';
import { prepareFormData } from './utils';

export const CreateRoadmapForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InferType<typeof createRoadmapValidationSchema>>({
    resolver: yupResolver(createRoadmapValidationSchema),
  });
  const [createRoadmap] = useCreateRoadmapMutation();

  const onSubmit: SubmitHandler<
    InferType<typeof createRoadmapValidationSchema>
  > = async formData => {
    await createRoadmap({
      variables: {
        data: prepareFormData(formData),
      },
    });

    navigate(appRoutes.roadmaps.index);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Card h={800} withBorder p={0}>
          <RoadmapBuilder {...register('roadmap')} control={control} />
        </Card>
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('title'),
            control,
            label: 'Title',
          }}
        />
        <FormField
          component={Textarea}
          fieldProps={{
            ...register('description'),
            control,
            label: 'Description',
            minRows: 8,
          }}
        />
        <Center>
          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Stack>
    </form>
  );
};
