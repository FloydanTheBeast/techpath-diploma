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
  const { classes } = useStyles();

  return (
    <MantineModal size="lg" classNames={classes} {...props}>
      <LoadingOverlay visible={Boolean(loading)} />
      {children}
    </MantineModal>
  );
};

const useStyles = createStyles(theme => ({
  inner: {
    boxSizing: 'border-box',
  },
  title: {
    font: `16px ${theme.fontFamily}`,
    fontWeight: 500,
  },
}));
