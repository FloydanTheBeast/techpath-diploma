import React from 'react';

import _ from 'lodash';

import { Modal, ModalProps } from 'src/components/common';
import { CreateUpdateCoursePlatformForm } from 'src/components/forms';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

import { CreateUpdateCoursePlatformModalArgs } from './types';

export const CreateUpdateCoursePlatformModal: React.FC<Partial<ModalProps>> = props => {
  const { isOpen, closeModal, args } = useModal<CreateUpdateCoursePlatformModalArgs>(
    ModalId.CreateCoursePlatformModal,
  );

  const isUpdate = !_.isEmpty(args?.defaultValues);

  if (!args?.onSubmit) {
    return null;
  }

  return (
    <Modal
      {...props}
      opened={isOpen}
      title={`${isUpdate ? 'Update' : 'Create'} course platform`}
      onClose={closeModal}
    >
      <CreateUpdateCoursePlatformForm
        onSubmit={args?.onSubmit}
        onCancel={() => closeModal()}
        defaultValues={args?.defaultValues}
        isUpdate={isUpdate}
      />
    </Modal>
  );
};
