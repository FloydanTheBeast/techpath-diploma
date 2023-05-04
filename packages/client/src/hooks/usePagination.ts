import React from 'react';

import { PaginationContext } from 'src/providers';

export const usePagination = () => {
  return React.useContext(PaginationContext);
};
