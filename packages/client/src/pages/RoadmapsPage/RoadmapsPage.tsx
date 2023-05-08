import React from 'react';

import { useCurrentUser } from 'src/hooks';
import { PaginationProvider } from 'src/providers';

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
    // TODO
    return null;
  }

  return null;
};
