import React from 'react';

import { DEFAULT_PAGINATION_STATE } from './constants';
import { PaginationContext, PaginationContextType } from './PaginationContext';
import { PaginationAction, PaginationActionType, PaginationState } from './types';

const reducer: React.Reducer<PaginationState, PaginationAction> = (state, action) => {
  switch (action.type) {
    case PaginationActionType.changeCount:
      return { ...state, count: action.payload.count };
    case PaginationActionType.changePagination:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const PaginationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_PAGINATION_STATE);

  const contextValue: PaginationContextType = React.useMemo(
    () => ({
      paginationState: state,
      dispatchPaginationState: dispatch,
      pageSizeOptions: new Array(5).fill(0).map((_, i) => (i + 1) * 12),
    }),
    [state, dispatch],
  );

  return <PaginationContext.Provider value={contextValue}>{children}</PaginationContext.Provider>;
};
