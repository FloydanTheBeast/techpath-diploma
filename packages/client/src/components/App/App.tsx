import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '../AppRouter';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql', // FIXME: use config
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
};
