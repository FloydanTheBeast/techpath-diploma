import React from 'react';

import { useCurrentUser } from 'src/hooks';
import { PaginationProvider, SearchProvider } from 'src/providers';

import { RoadmapsPageUser } from './RoadmapPageUser';
import { RoadmapsPageAdmin } from './RoadmapsPageAdmin';

export const RoadmapsPage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return (
      <PaginationProvider>
        <SearchProvider>
          <RoadmapsPageAdmin />
        </SearchProvider>
      </PaginationProvider>
    );
  }

  if (permissions.isUser) {
    return (
      <PaginationProvider>
        <SearchProvider>
          <RoadmapsPageUser />
        </SearchProvider>
      </PaginationProvider>
    );
  }

  return null;
};
