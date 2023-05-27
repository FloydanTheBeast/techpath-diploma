import React from 'react';

import { SearchContext } from 'src/providers';

export const useSearch = () => React.useContext(SearchContext);
