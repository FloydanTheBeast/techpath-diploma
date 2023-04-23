import React from 'react';

import { useCurrentUser } from 'src/hooks';

import { CoursesPageAdmin } from './CoursesPageAdmin';
import { CoursesPageUser } from './CoursesPageUser';

export const CoursesPage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return <CoursesPageAdmin />;
  }

  if (permissions.isUser) {
    return <CoursesPageUser />;
  }

  return null;
};
