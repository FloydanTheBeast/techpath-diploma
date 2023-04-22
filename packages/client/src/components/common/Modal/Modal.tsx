import React from 'react';

import {
  LoadingOverlay,
  Modal as MantineModal,
  ModalProps as MantineModalProps,
  createStyles,
} from '@mantine/core';

export type ModalProps = MantineModalProps & {
  loading?: boolean;
};

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  loading,
  ...props
}) => {
  const {
    classes: { title },
  } = useStyles();

  return (
    <MantineModal size="lg" classNames={{ title }} {...props}>
      <LoadingOverlay visible={Boolean(loading)} />
      {children}
    </MantineModal>
  );
};

const useStyles = createStyles(theme => ({
  title: {
    font: `16px ${theme.fontFamily}`,
    fontWeight: 500,
  },
}));
