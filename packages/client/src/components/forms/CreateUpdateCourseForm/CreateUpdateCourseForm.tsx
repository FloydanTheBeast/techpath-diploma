import React from 'react';

import { Button, Group, TextInput, Textarea } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { FormField } from 'src/components/common';
import { CreateUpdateFormProps } from 'src/types';

import { CreateUpdateCourseFormData } from './types';

export const CreateUpdateCourseForm: React.FC<
  CreateUpdateFormProps<CreateUpdateCourseFormData>
> = ({ onSubmit, onCancel, defaultValues, isUpdate }) => {
  const { handleSubmit, register, control } = useForm<CreateUpdateCourseFormData>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group grow mb="md">
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('title'),
            control,
            label: 'Title',
            placeholder: 'Course title',
            required: true,
          }}
        />
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('url'),
            control,
            label: 'Url',
            placeholder: 'Course url',
            required: true,
          }}
        />
      </Group>
      <FormField
        component={Textarea}
        fieldProps={{
          ...register('description'),
          control,
          label: 'Description',
          placeholder: 'Course description',
          rows: 5,
          mb: 'md',
        }}
      />
      <Group spacing="1rem" position="right">
        <Button onClick={onCancel} variant="outline" color="red">
          Cancel
        </Button>
        <Button type="submit" variant="light">
          {isUpdate ? 'Update' : 'Create'}
        </Button>
      </Group>
    </form>
  );
};
