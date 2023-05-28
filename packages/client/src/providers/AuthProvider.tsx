import React from 'react';

import { useApolloClient } from '@apollo/client';
import { useLocalStorage } from '@mantine/hooks';
import { SignInMutationVariables, useSignInMutation } from '@shared/graphql';
import { Nullable } from '@shared/types';
import { useNavigate } from 'react-router';

import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY, appRoutes } from 'src/constants';

export interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (loginData: SignInMutationVariables['data']) => Promise<void>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: async () => void 0,
  logout: () => null,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const [signInMutation] = useSignInMutation();

  // TODO: Use `useReducer`
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage<Nullable<string>>({
    key: ACCESS_TOKEN_STORAGE_KEY,
    defaultValue: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
    deserialize: value => value,
    serialize: value => value || '',
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!accessToken);

  const signIn: AuthContextType['signIn'] = async loginData => {
    const { data } = await signInMutation({ variables: { data: loginData } });
    setAccessToken(data?.signIn.accessToken);
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data?.signIn.refreshToken ?? '');
    setIsAuthenticated(true);
  };

  const logout: AuthContextType['logout'] = () => {
    removeAccessToken();
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    setIsAuthenticated(false);
    apolloClient.resetStore();
    navigate(appRoutes.auth.index);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
