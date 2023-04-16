import React from 'react';

import { IconCertificate } from '@tabler/icons-react';

import { appRoutes } from 'src/constants';
import { NavbarLink } from 'src/types';

import { BaseAppLayout } from '../BaseAppLayout';

const navbarLinks: NavbarLink[] = [
  { label: 'Courses', path: appRoutes.app.index, icon: IconCertificate },
];

export const AdminAppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseAppLayout navbarLinks={navbarLinks}>{children}</BaseAppLayout>;
};
