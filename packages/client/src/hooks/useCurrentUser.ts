import React from 'react';

import { useCurrentUserQuery } from '@shared/graphql';

import { defaultUserPermissions } from 'src/constants/user';
import { getUserPermissions } from 'src/utils';

import { useAuth } from './useAuth';

export const useCurrentUser = () => {
  const { isAuthenticated } = useAuth();
  const { data, loading: loadingCurrentUser } = useCurrentUserQuery({ skip: !isAuthenticated });
  const currentUser = data?.currentUser;

  const [permissions, setPermissions] = React.useState(defaultUserPermissions);

  React.useEffect(() => setPermissions(getUserPermissions(currentUser)), [currentUser]);

  return {
    currentUser,
    loadingCurrentUser,
    permissions,
  };
};
