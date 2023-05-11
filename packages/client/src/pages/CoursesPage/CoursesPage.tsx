import React from 'react';

import { useCurrentUser } from 'src/hooks';
import { PaginationProvider, SearchProvider } from 'src/providers';

import { CoursesPageAdmin } from './CoursesPageAdmin';
import { CoursesPageUser } from './CoursesPageUser';

export const CoursesPage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return (
      <PaginationProvider>
        <SearchProvider>
          <CoursesPageAdmin />
        </SearchProvider>
      </PaginationProvider>
    );
  }

  if (permissions.isUser) {
    return (
      <PaginationProvider>
        <SearchProvider>
          <CoursesPageUser />
        </SearchProvider>
      </PaginationProvider>
    );
  }

  return null;
};
