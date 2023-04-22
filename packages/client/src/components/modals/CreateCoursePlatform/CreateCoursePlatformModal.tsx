import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Group, TextInput } from '@mantine/core';
import { GetCoursePlatformsDocument, useCreateCoursePlatformMutation } from '@shared/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CoursePlatformLogo, FormField, Modal } from 'src/components/common';
import { ModalId } from 'src/constants';
import { useDebounce, useModal } from 'src/hooks';

import { createCoursePlatformValidationSchema } from './constants';
import type { CreateCoursePlatformFormData } from './types';

export const CreateCoursePlatformModal: React.FC = () => {
  const { isOpen, closeModal, switchClosability } = useModal(ModalId.CreateCoursePlatformModal);
  const [createCoursePlatform] = useCreateCoursePlatformMutation();
  const { register, handleSubmit, control, watch } = useForm<CreateCoursePlatformFormData>({
    resolver: yupResolver(createCoursePlatformValidationSchema),
  });

  const logoUrl = useDebounce(watch('logoUrl'), 500);

  const onSubmit: SubmitHandler<CreateCoursePlatformFormData> = async formData => {
    switchClosability(false);
    try {
      await createCoursePlatform({
        variables: { input: formData },
        refetchQueries: [GetCoursePlatformsDocument],
      });
      closeModal();
    } catch (error) {
      // TODO: Spawn notification
    } finally {
      switchClosability(true);
    }
  };

  return (
    <Modal opened={isOpen} title="Create course platform" onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('name'),
            control,
            label: 'Name',
            placeholder: 'Course platform name',
            mb: 'md',
            required: true,
          }}
        />
        <FormField
          component={TextInput}
          fieldProps={{
            ...register('url'),
            control,
            label: 'Url',
            placeholder: 'Course platform url',
            mb: 'md',
            required: true,
          }}
        />
        <Group align="center">
          <FormField
            component={TextInput}
            fieldProps={{
              ...register('logoUrl'),
              control,
              label: 'Logo Url',
              placeholder: 'Course platform logo url',
              mb: 'md',
              sx: { flexGrow: 1, input: { height: 50, paddingRight: '3rem' } },
              rightSection: <CoursePlatformLogo logoUrl={logoUrl} sx={{ marginRight: 12 }} />,
            }}
          />
        </Group>
        <Group spacing="1rem" position="right">
          <Button onClick={() => closeModal()} variant="outline" color="red">
            Cancel
          </Button>
          <Button type="submit" variant="light">
            Create
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
