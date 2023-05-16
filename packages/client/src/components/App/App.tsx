import React from 'react';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { AuthSessionResponse } from '@shared/graphql';
import { BrowserRouter } from 'react-router-dom';

import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY, appRoutes } from 'src/constants';
import { AuthProvider } from 'src/providers';
import { ModalsProvider } from 'src/providers/ModalsProvider';

import { AppRouter } from '../AppRouter';
import { GlobalSearchProvider } from '../GlobalSearchProvider';

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
  for (const err of graphQLErrors ?? []) {
    if (err.extensions?.code === 'UNAUTHENTICATED') {
      return fromPromise(
        refreshToken().catch(error => {
          localStorage.clear();
          window.location.replace(appRoutes.auth.signin);
          return;
        }),
      )
        .filter<AuthSessionResponse>(
          (val: Record<string, unknown> | void): val is AuthSessionResponse =>
            typeof val?.accessToken === 'string' && typeof val?.refreshToken === 'string',
        )
        .flatMap(({ accessToken, refreshToken }) => {
          localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
          localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken);

          const oldHeaders = operation.getContext().headers;
          operation.setContext(() => ({
            headers: {
              ...oldHeaders,
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
            <GlobalSearchProvider>
              <AppRouter />
            </GlobalSearchProvider>
          </ModalsProvider>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
