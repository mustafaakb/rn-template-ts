import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {RetryLink} from '@apollo/client/link/retry';
import React from 'react';
import Config from 'react-native-config';

const httpLink = new HttpLink({uri: Config.BASE_URL});
const getAuthLink = (token: string) => {
  return setContext((_, previousContext) => ({
    headers: {
      ...previousContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));
};
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const retryLink = new RetryLink({
  attempts: (count, operation, error) =>
    !!error && operation.operationName !== 'specialCase' && count <= 10,
  delay: (count, _operation, _error) => count * 500 * Math.random(),
});

const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, getAuthLink('token'), retryLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-and-network',
    },
  },
});

export const ApiApolloProvider = ({children}: {children: React.ReactNode}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
