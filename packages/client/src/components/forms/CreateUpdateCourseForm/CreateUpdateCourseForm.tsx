import React from 'react';

import {
  Button,
  Flex,
  Group,
  Loader,
  MultiSelect,
  NumberInput,
  Select,
  SelectItem,
  Skeleton,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { Difficulty, useGetCoursePlatformsQuery, useGetTopicTagsQuery } from '@shared/graphql';
import { IconCoins, IconHash, IconLanguage, IconStairsUp, IconWorldWww } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

import { FormField } from 'src/components/common';
import { useDebounce } from 'src/hooks';
import { CreateUpdateFormProps } from 'src/types';
import { getSearchQueryOption } from 'src/utils';

import { PlatformSelectItem, PlatformSelectItemProps } from './components';
import { CreateUpdateCourseFormData } from './types';

export const CreateUpdateCourseForm: React.FC<
  CreateUpdateFormProps<CreateUpdateCourseFormData>
> = ({ onSubmit, onCancel, defaultValues, isUpdate }) => {
  const { handleSubmit, register, control, setValue } = useForm<CreateUpdateCourseFormData>({
    defaultValues,
  });

  const [platformSearchValue, setPlatformSearchValue] = React.useState('');
  const debouncedPlatformSearchValue = useDebounce(platformSearchValue, 500);

  const { data: coursePlatformsData, loading: loadingCoursePlatforms } = useGetCoursePlatformsQuery(
    {
      variables: {
        where: getSearchQueryOption(debouncedPlatformSearchValue, 'name'),
      },
    },
  );

  const { data: topicTagsData, loading: loadingTopicTags } = useGetTopicTagsQuery();

  const coursePlatforms = React.useMemo(
    (): PlatformSelectItemProps[] =>
      coursePlatformsData?.coursePlatforms.map(platform => ({
        value: platform.id,
        label: platform.name,
        logoUrl: platform.logoUrl,
      })) ?? [],
    [coursePlatformsData?.coursePlatforms],
  );

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
        <Flex justify="space-between" gap="md">
          <FormField
            component={Select}
            fieldProps={{
              ...register('difficulty'),
              control,
              label: 'Difficulty',
              data: Object.values(Difficulty),
              defaultValue: defaultValues?.difficulty,
              clearable: true,
              onChange: value => setValue('difficulty', value as Difficulty),
              icon: <IconStairsUp size="1rem" />,
              sx: { flexGrow: 1 },
            }}
          />
          <FormField
            component={Select}
            fieldProps={{
              ...register('languageCountryCodeISO'),
              control,
              label: 'Language',
              data: ['ru', 'en', 'es', 'de', 'fr'], // FIXME: Use name, move to constants
              defaultValue: defaultValues?.languageCountryCodeISO,
              onChange: value => setValue('languageCountryCodeISO', value),
              clearable: true,
              icon: <IconLanguage size="1rem" />,
              sx: { flexGrow: 1 },
            }}
          />
        </Flex>
        <Flex justify="space-between" gap="md">
          <FormField
            component={Select}
            fieldProps={{
              ...register('platformId'),
              searchable: true,
              clearable: true,
              control,
              label: 'Platform',
              data: coursePlatforms,
              itemComponent: PlatformSelectItem,
              nothingFound: 'Nothing was found',
              onChange: value => setValue('platformId', value),
              onSearchChange: setPlatformSearchValue,
              searchValue: platformSearchValue,
              defaultValue: defaultValues?.platformId,
              sx: { flex: '0 1 100%' },
              icon: loadingCoursePlatforms ? (
                <Loader size="1rem" color="dark" />
              ) : (
                <IconWorldWww size="1rem" />
              ),
            }}
          />
          <FormField
            component={NumberInput}
            fieldProps={{
              ...register('price.price', { valueAsNumber: true }),
              control,
              label: 'Price',
              defaultValue: defaultValues?.price?.price ?? undefined,
              onChange: value => value && setValue('price.price', value),
              min: undefined,
              max: undefined,
              type: 'number',
              icon: <IconCoins size="1rem" />,
              sx: { flex: '0 1 100%' },
              rightSectionWidth: 100,
              rightSection: (
                <FormField
                  component={Select}
                  fieldProps={{
                    ...register('price.currencyCodeISO'),
                    control,
                    data: ['RUB'],
                    defaultValue: defaultValues?.price?.currencyCodeISO,
                    onChange: value => setValue('price.currencyCodeISO', value),
                    variant: 'filled',
                    radius: 0,
                  }}
                />
              ),
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
              defaultValue: defaultValues?.topicTagsIds ?? [],
              icon: <IconHash size="1rem" />,
            }}
          />
        )}
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
