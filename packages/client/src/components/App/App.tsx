import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink,
  fromPromise,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { SessionInfoFragment } from '@shared/graphql';
import { BrowserRouter } from 'react-router-dom';

import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY, appRoutes } from 'src/constants';
import { AuthProvider } from 'src/providers';
import { ModalsProvider } from 'src/providers/ModalsProvider';

import { AppRouter } from '../AppRouter';

import { refreshToken } from './utils';

const httpLink = new HttpLink({ uri: 'http://localhost:3333/graphql' }); // FIXME: use config

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)}`,
    },
  }));

  return forward(operation);
});

const errorHandlerMiddleware = onError(({ graphQLErrors, operation, forward }) => {
  console.log(graphQLErrors);
  for (const err of graphQLErrors ?? []) {
    if (err.extensions?.code === 'UNAUTHENTICATED') {
      return fromPromise(
        refreshToken().catch(error => {
          console.log(error);
          // localStorage.clear();
          // window.location.replace(appRoutes.auth.signin);
          return;
        }),
      )
        .filter<SessionInfoFragment>(function isSession(val: any): val is SessionInfoFragment {
          return typeof val?.accessToken === 'string' && typeof val?.refreshToken === 'string';
        })
        .flatMap(({ accessToken, refreshToken }) => {
          console.log('Refreshed');
          localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
          localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken);

          operation.setContext(({ headers = {} }) => ({
            headers: {
              ...headers,
              authorization: `Bearer ${accessToken}`,
            },
          }));

          return forward(operation);
        });
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorHandlerMiddleware, authMiddleware, httpLink]),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <ModalsProvider>
            <AppRouter />
          </ModalsProvider>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
