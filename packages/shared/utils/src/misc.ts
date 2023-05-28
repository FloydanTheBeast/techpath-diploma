import type { User } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export const getUserFullName = (user: Nullable<Pick<User, 'firstName' | 'lastName'>>) =>
  `${user?.firstName || ''} ${user?.lastName || ''}`;

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const clearHtml = (html: Nullable<string>) => {
  const element = document.createElement('div');
  element.innerHTML = html ?? '';
  return element.textContent || element.innerText || '';
};
