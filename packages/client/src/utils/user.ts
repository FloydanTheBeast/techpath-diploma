import { UserInfoFragment } from '@shared/graphql';
import { Nullable, UserRole } from '@shared/types';
import _ from 'lodash';

import { defaultUserPermissions } from 'src/constants/user';
import { UserPermissions } from 'src/types';

export const getUserPermissions = (user: Nullable<UserInfoFragment>): UserPermissions => {
  const permissions = _.cloneDeep(defaultUserPermissions);

  if (!user) return permissions;

  const { roles } = user;

  if (roles.includes(UserRole.admin)) {
    permissions.isAdmin = true;
  }
  if (roles.includes(UserRole.user)) {
    permissions.isUser = true;
  }
  if (!_.isEmpty(roles)) {
    permissions.anyAuthorized = true;
  }

  return permissions;
};
