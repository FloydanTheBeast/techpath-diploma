import React from 'react';

import { IconCertificate, IconHome, IconSitemap } from '@tabler/icons-react';

import { appRoutes } from 'src/constants';
import { NavbarLink } from 'src/types';

import { BaseAppLayout } from '../BaseAppLayout';

const navbarLinks: NavbarLink[] = [
  { label: 'Home', path: appRoutes.app.index, icon: IconHome },
  {
    label: 'Explore courses',
    path: appRoutes.courses.index,
    icon: IconCertificate,
  },
  { label: 'Explore roadmaps', path: appRoutes.roadmaps.index, icon: IconSitemap, disabled: true },
];

export const UserAppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseAppLayout navbarLinks={navbarLinks}>{children}</BaseAppLayout>;
};
