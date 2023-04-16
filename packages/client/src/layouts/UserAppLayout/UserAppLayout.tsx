import React from 'react';

import { IconHome } from '@tabler/icons-react';

import { appRoutes } from 'src/constants';
import { NavbarLink } from 'src/types';

import { BaseAppLayout } from '../BaseAppLayout';

const navbarLinks: NavbarLink[] = [{ label: 'Home', path: appRoutes.app.index, icon: IconHome }];

export const UserAppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseAppLayout navbarLinks={navbarLinks}>{children}</BaseAppLayout>;
};
