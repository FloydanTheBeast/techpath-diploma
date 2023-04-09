export type JwtPayload = {
  id: string;
  roles: string[];
};

export enum UserRole {
  user = 'user',
  admin = 'admin',
}
