import React from 'react';

import { IconCertificate, IconLayoutDashboard, IconWorldWww } from '@tabler/icons-react';

import { appRoutes } from 'src/constants';
import { NavbarLink } from 'src/types';

import { BaseAppLayout } from '../BaseAppLayout';

const navbarLinks: NavbarLink[] = [
  { label: 'Dashboard', path: appRoutes.app.index, icon: IconLayoutDashboard, disabled: true },
  { label: 'Courses', path: appRoutes.courses.index, icon: IconCertificate },
  { label: 'Course Platforms', path: appRoutes.coursePlatforms.index, icon: IconWorldWww },
];

export const AdminAppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseAppLayout navbarLinks={navbarLinks}>{children}</BaseAppLayout>;
};
