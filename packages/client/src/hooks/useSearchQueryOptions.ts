import { useSearch } from './useSearch';

export const useSearchQueryOptions = (fields: string[]) => {
  const { searchQuery } = useSearch();

  // TODO: Change to fulltext search as soon as possible
  return {
    OR: fields.map(field => ({ [`${field}_MATCHES`]: `(?i).*${searchQuery ?? ''}.*` })),
  };
};
