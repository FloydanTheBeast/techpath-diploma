import { getSearchQueryOption } from 'src/utils';

import { useSearch } from './useSearch';

export const useSearchQueryOptions = (fields: string[]) => {
  const { searchQuery } = useSearch();

  return getSearchQueryOption(searchQuery, fields);
};
