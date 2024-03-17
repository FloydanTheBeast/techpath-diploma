import React from 'react';

import { Button, MultiSelect, SelectItem, Skeleton, Stack, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useGetTopicTagsQuery } from '@shared/graphql';
import { Nullable } from '@shared/types';
import { IconCheck, IconHash, IconLanguage, IconX } from '@tabler/icons-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContentPageLayout, FormField } from 'src/components';
import { useCurrentUser } from 'src/hooks';

type PreferencesUpdateFormValues = {
  preferableLanguages: Nullable<string[]>;
  preferableTopics: Nullable<string[]>;
};

export const UserProfilePage: React.FC = () => {
  const { currentUser, updateCurrentUser } = useCurrentUser();
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<PreferencesUpdateFormValues>({
    defaultValues: {
      preferableLanguages: currentUser?.preferableLanguages?.map(
        ({ countryCodeISO }) => countryCodeISO,
      ),
      preferableTopics: currentUser?.preferableTopics?.map(({ id }) => id),
    },
  });

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

  const onSubmit: SubmitHandler<PreferencesUpdateFormValues> = async values => {
    try {
      await updateCurrentUser({
        preferableLanguages: [
          {
            disconnect: [{ where: {} }],
            connect: values.preferableLanguages?.map(lang => ({
              where: { node: { countryCodeISO: lang } },
            })),
          },
        ],
        preferableTopics: [
          {
            disconnect: [{ where: {} }],
            connect: values.preferableTopics?.map(id => ({
              where: { node: { id } },
            })),
          },
        ],
      });

      reset({}, { keepDirty: false });

      notifications.show({
        title: 'Success',
        message: 'Preferences has been updated',
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
    }
  };

  return (
    <ContentPageLayout title="Profile">
      <Title order={3} mb="md">
        User Preferences
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maw={500}>
          <FormField
            component={MultiSelect}
            fieldProps={{
              ...register('preferableLanguages'),
              control,
              searchable: true,
              clearable: true,
              label: 'Preferable Languages',
              data: ['ru', 'en', 'es', 'de', 'fr'], // FIXME: Use name, move to constants
              onChange: value =>
                setValue('preferableLanguages', value as any, { shouldDirty: true }), // FIXME
              defaultValue: currentUser?.preferableLanguages?.map(
                ({ countryCodeISO }) => countryCodeISO,
              ),
              icon: <IconLanguage size="1rem" />,
            }}
          />
          {loadingTopicTags ? (
            <Skeleton w="100%" h={60} />
          ) : (
            <FormField
              component={MultiSelect}
              fieldProps={{
                ...register('preferableTopics'),
                sx: { textTransform: 'capitalize' },
                searchable: true,
                clearable: true,
                control,
                label: 'Preferable Topics',
                data: topicTags,
                nothingFound: 'Nothing was found',
                onChange: value => setValue('preferableTopics', value, { shouldDirty: true }),
                defaultValue: currentUser?.preferableTopics?.map(({ id }) => id),
                icon: <IconHash size="1rem" />,
              }}
            />
          )}
          <Button type="submit" w={100} loading={isSubmitting} disabled={!isDirty}>
            Save
          </Button>
        </Stack>
      </form>
    </ContentPageLayout>
  );
};
