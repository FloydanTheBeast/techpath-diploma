import _ from 'lodash';

export const getSearchQueryOption = (
  searchQuery: string | undefined,
  fields: string | string[],
) => {
  if (!searchQuery) return null;

  const escapedSearchQuery = _.escapeRegExp(searchQuery);

  const getOption = (escapedSearchQuery: string, field: string) => ({
    [`${field}_MATCHES`]: `(?i).*${escapedSearchQuery ?? ''}.*`,
  });

  // TODO: Change to fulltext search as soon as possible
  return typeof fields === 'string'
    ? getOption(escapedSearchQuery, fields)
    : {
        OR: fields.map(field => getOption(escapedSearchQuery, field)),
      };
};
