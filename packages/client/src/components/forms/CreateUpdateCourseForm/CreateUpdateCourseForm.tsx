import React from 'react';

import { Autocomplete, Button, Group, Stack, TextInput, Textarea } from '@mantine/core';
import { useGetCoursePlatformsQuery } from '@shared/graphql';
import { Nullable } from '@shared/types';
import { useForm } from 'react-hook-form';

import { FormField } from 'src/components/common';
import { useDebounce } from 'src/hooks';
import { CreateUpdateFormProps } from 'src/types';

import { PlatformSearchItem, PlatformSearchItemProps } from './components';
import { CreateUpdateCourseFormData } from './types';

export const CreateUpdateCourseForm: React.FC<
  CreateUpdateFormProps<CreateUpdateCourseFormData>
> = ({ onSubmit, onCancel, defaultValues, isUpdate }) => {
  const { handleSubmit, register, control } = useForm<CreateUpdateCourseFormData>({
    defaultValues,
  });

  const [platformSearchValue, setPlatformSearchValue] = React.useState<Nullable<string>>();

  const debouncedPlatformSearchValue = useDebounce(platformSearchValue, 500);

  const { data } = useGetCoursePlatformsQuery({
    variables: {
      where: {
        name_CONTAINS: debouncedPlatformSearchValue,
      },
    },
  });

  const coursePlatforms = React.useMemo(
    (): PlatformSearchItemProps[] =>
      data?.coursePlatforms.map(platform => ({
        value: platform.id,
        name: platform.name,
        logoUrl: platform.logoUrl,
      })) ?? [],
    [data?.coursePlatforms],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Group grow>
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
            minRows: 8,
          }}
        />
        <FormField
          component={Autocomplete}
          fieldProps={{
            ...register('platformId'),
            control,
            label: 'Platform',
            data: coursePlatforms ?? [],
            itemComponent: PlatformSearchItem,
            filter: () => true,
            onChange: setPlatformSearchValue,
            defaultValue: defaultValues?.platformId ?? undefined,
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
      </Stack>
    </form>
  );
};
