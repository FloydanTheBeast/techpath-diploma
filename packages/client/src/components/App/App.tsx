import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter } from 'react-router-dom';

import { ACCESS_TOKEN_STORAGE_KEY } from 'src/constants';
import { AuthProvider } from 'src/providers';

import { AppRouter } from '../AppRouter';

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

const errorHandlerMiddleware = onError(errorHandler => {
  // TODO: Refresh auth state
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
