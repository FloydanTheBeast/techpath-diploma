import React from 'react';

import { useLocalStorage } from '@mantine/hooks';
import {
  SignInMutationVariables,
  UserInfoFragment,
  useCurrentUserLazyQuery,
  useSignInMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import { useNavigate } from 'react-router';

import { ACCESS_TOKEN_STORAGE_KEY, appRoutes } from 'src/constants';

export interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: Nullable<UserInfoFragment>;
  loadingCurrentUser: boolean;
  signIn: (loginData: SignInMutationVariables['data']) => Promise<void>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
  currentUser: null,
  loadingCurrentUser: false,
  signIn: async () => void 0,
  logout: () => null,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { spawnNotification } = useNotifications();
  const navigate = useNavigate();
  const [signInMutation] = useSignInMutation();
  const [getCurrentUser, { loading: loadingCurrentUser }] = useCurrentUserLazyQuery();

  // TODO: Use `useReducer`
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage<Nullable<string>>({
    key: ACCESS_TOKEN_STORAGE_KEY,
    defaultValue: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
    deserialize: value => value,
    serialize: value => value || '',
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!accessToken);
  const [currentUser, setCurrentUser] = React.useState<Nullable<UserInfoFragment>>();

  const signIn: AuthContextType['signIn'] = async loginData => {
    try {
      const { data } = await signInMutation({ variables: { data: loginData } });
      setAccessToken(data?.signIn.accessToken);
      setIsAuthenticated(true);
      setCurrentUser(data?.signIn.user);
    } catch (error) {
      // TODO: Spawn error notification
      console.error(error);
    }
  };

  const logout: AuthContextType['logout'] = () => {
    removeAccessToken();
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigate(appRoutes.auth.index);
  };

  React.useEffect(() => {
    if (accessToken) {
      (async () => {
        const { data, error } = await getCurrentUser();
        if (error) {
          // TODO: Spawn notification saying that session expired
          logout();
        }

        const user = data?.currentUser;
        setCurrentUser(user);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        loadingCurrentUser,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
