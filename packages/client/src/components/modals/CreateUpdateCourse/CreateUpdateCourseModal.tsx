import React from 'react';

import _ from 'lodash';

import { Modal, ModalProps } from 'src/components/common';
import { CreateUpdateCourseForm } from 'src/components/forms';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

import { CreateUpdateCourseModalArgs } from './types';

export const CreateUpdateCourseModal: React.FC<Partial<ModalProps>> = props => {
  const { isOpen, closeModal, args } = useModal<CreateUpdateCourseModalArgs>(
    ModalId.CreateUpdateCourseModal,
  );

  if (!args?.onSubmit) {
    return null;
  }

  const isUpdate = !_.isEmpty(args?.defaultValues);

  return (
    <Modal
      {...props}
      opened={isOpen}
      onClose={closeModal}
      title={`${isUpdate ? 'Update' : 'Create new'} course`}
    >
      <CreateUpdateCourseForm
        onSubmit={args.onSubmit}
        onCancel={() => closeModal()}
        defaultValues={args.defaultValues}
        isUpdate={isUpdate}
      />
    </Modal>
  );
};
