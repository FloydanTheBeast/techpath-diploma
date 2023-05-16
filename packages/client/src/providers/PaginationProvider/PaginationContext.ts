import React from 'react';

import { DEFAULT_PAGINATION_STATE } from './constants';
import type { PaginationAction, PaginationState } from './types';

export type PaginationContextType = {
  paginationState: PaginationState;
  dispatchPaginationState: React.Dispatch<PaginationAction>;
  pageSizeOptions: number[];
};

export const PaginationContext = React.createContext<PaginationContextType>({
  paginationState: DEFAULT_PAGINATION_STATE,
  dispatchPaginationState: () => void 0,
  pageSizeOptions: [],
});
