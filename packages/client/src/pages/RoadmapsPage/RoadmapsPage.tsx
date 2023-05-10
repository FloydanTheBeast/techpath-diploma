import React from 'react';

import { useCurrentUser } from 'src/hooks';
import { PaginationProvider } from 'src/providers';

import { RoadmapsPageUser } from './RoadmapPageUser';
import { RoadmapsPageAdmin } from './RoadmapsPageAdmin';

export const RoadmapsPage: React.FC = () => {
  const { permissions } = useCurrentUser();

  if (permissions.isAdmin) {
    return (
      <PaginationProvider>
        <RoadmapsPageAdmin />
      </PaginationProvider>
    );
  }

  if (permissions.isUser) {
    return (
      <PaginationProvider>
        <RoadmapsPageUser />
      </PaginationProvider>
    );
  }

  return null;
};
