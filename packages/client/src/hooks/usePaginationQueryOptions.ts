import { usePagination } from './usePagination';

export const usePaginationQueryOptions = () => {
  const { paginationState } = usePagination();

  return {
    limit: paginationState.pageSize,
    offset: paginationState.pageSize * paginationState.pageIndex,
  };
};
