import React from 'react';

import { useCurrentUser } from 'src/hooks';

import { AdminAppLayout } from '../AdminAppLayout';
import { UserAppLayout } from '../UserAppLayout';

export const LayoutResolver: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { permissions } = useCurrentUser();
  let Layout: React.ComponentType<React.PropsWithChildren> = React.Fragment;

  if (permissions.isAdmin) {
    Layout = AdminAppLayout;
  }
  if (permissions.isUser) {
    Layout = UserAppLayout;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Layout>{children}</Layout>;
};
