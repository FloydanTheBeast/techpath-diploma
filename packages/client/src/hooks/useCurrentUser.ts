import React from 'react';

import {
  CurrentUserDocument,
  UserUpdateInput,
  useCurrentUserQuery,
  useUpdateUsersMutation,
} from '@shared/graphql';
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
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });
  const currentUser = data?.currentUser;

  const [updateUsers] = useUpdateUsersMutation();

  const updateCurrentUser = React.useCallback(
    async (input: Pick<UserUpdateInput, 'preferableLanguages' | 'preferableTopics'>) => {
      if (!currentUser?.id) return;

      return await updateUsers({
        variables: {
          where: {
            id: currentUser?.id,
          },
          update: input,
        },
        refetchQueries: [CurrentUserDocument],
        awaitRefetchQueries: true,
      });
    },
    [currentUser?.id, updateUsers],
  );

  const isAuthorized = React.useMemo(() => !_.isEmpty(currentUser), [currentUser]);
  const permissions = React.useMemo(() => getUserPermissions(currentUser), [currentUser]);

  return {
    currentUser,
    isAuthorized,
    updateCurrentUser,
    refetchCurrentUser,
    loadingCurrentUser,
    permissions,
  };
};
