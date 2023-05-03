import type { User } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const getUserFullName = (user: Nullable<Pick<User, 'firstName' | 'lastName'>>) =>
  `${user?.firstName || ''} ${user?.lastName || ''}`;

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
