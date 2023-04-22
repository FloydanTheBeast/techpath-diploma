import React from 'react';

import { useCurrentUserQuery } from '@shared/graphql';
import _ from 'lodash';

import { getUserPermissions } from 'src/utils';

import { useAuth } from './useAuth';

export const useCurrentUser = () => {
  const { isAuthenticated } = useAuth();
  const {
    data,
    loading: loadingCurrentUser,
    refetch: refetchCurrentUser,
  } = useCurrentUserQuery({
    skip: !isAuthenticated,
    initialFetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });
  const currentUser = data?.currentUser;

  const isAuthorized = React.useMemo(() => !_.isEmpty(currentUser), [currentUser]);
  const permissions = React.useMemo(() => getUserPermissions(currentUser), [currentUser]);

  return {
    currentUser,
    isAuthorized,
    refetchCurrentUser,
    loadingCurrentUser,
    permissions,
  };
};
