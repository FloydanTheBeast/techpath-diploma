import React from 'react';

import { AuthContext } from 'src/providers';

export const useAuth = () => React.useContext(AuthContext);
