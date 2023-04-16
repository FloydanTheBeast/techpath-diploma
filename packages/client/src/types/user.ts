export enum UserPermissionKey {
  isAdmin = 'isAdmin',
  isUser = 'isUser',
  anyAuthorized = 'anyAuthorized',
}

export type UserPermissions = { -readonly [key in keyof typeof UserPermissionKey]: boolean };
