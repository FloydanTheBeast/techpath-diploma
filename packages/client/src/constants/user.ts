import { UserPermissions, UserPermissionKey } from 'src/types';

export const defaultUserPermissions = Object.keys(UserPermissionKey).reduce(
  (acc, key) => ({ ...acc, [key]: false }),
  {} as UserPermissions,
);
