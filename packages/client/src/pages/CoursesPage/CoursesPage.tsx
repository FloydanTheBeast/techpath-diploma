import React from 'react';

import { useCurrentUser } from 'src/hooks';
import { PaginationProvider } from 'src/providers';

import { CoursesPageAdmin } from './CoursesPageAdmin';
import { CoursesPageUser } from './CoursesPageUser';

export const CoursesPage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return (
      <PaginationProvider>
        <CoursesPageAdmin />
      </PaginationProvider>
    );
  }

  if (permissions.isUser) {
    return <CoursesPageUser />;
  }

  return null;
};
