import React from 'react';

export type SearchContextType = {
  searchQuery: string | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const SearchContext = React.createContext<SearchContextType>({
  searchQuery: undefined,
  setSearchQuery: () => void 0,
});
