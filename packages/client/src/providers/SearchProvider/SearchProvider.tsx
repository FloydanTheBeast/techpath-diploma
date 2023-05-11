import React from 'react';

import { useDebounce } from 'src/hooks';

import { SearchContext, SearchContextType } from './SearchContext';

const SEARCH_DEBOUNCE_TIME = 500;

export const SearchProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>();

  const debouncedSearchQuery = useDebounce(searchQuery, SEARCH_DEBOUNCE_TIME);

  const contextValue = React.useMemo(
    (): SearchContextType => ({
      searchQuery: debouncedSearchQuery,
      setSearchQuery,
    }),
    [debouncedSearchQuery, setSearchQuery],
  );

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
