import React from 'react';

import { Button, Group, TextInput, Textarea } from '@mantine/core';
import { CourseCreateInput, GetCoursesDocument, useCreateCourseMutation } from '@shared/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormField, Modal } from 'src/components/common';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

type CreateCourseFormData = Pick<CourseCreateInput, 'title' | 'description' | 'url'>;

export const CreateCourseModal: React.FC = () => {
  const { isOpen, closeModal, switchClosability } = useModal(ModalId.CreateCourseModal);
  const [createCourse, { loading }] = useCreateCourseMutation();
  const { handleSubmit, register, control } = useForm<CreateCourseFormData>();

  const onSubmit: SubmitHandler<CreateCourseFormData> = async formData => {
    switchClosability(false);
    try {
      await createCourse({ variables: { input: formData }, refetchQueries: [GetCoursesDocument] });
      closeModal();
    } catch (error) {
      // TODO: Spawn notification
    } finally {
      switchClosability(true);
    }
  };

  return (
    <Modal opened={isOpen} onClose={closeModal} title="Create new course" loading={loading}>
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
