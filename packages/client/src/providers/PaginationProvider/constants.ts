import { PaginationState } from './types';

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_INDEX = 0;

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  count: 0,
  pageSize: DEFAULT_PAGE_SIZE,
  pageIndex: DEFAULT_PAGE_INDEX,
};
