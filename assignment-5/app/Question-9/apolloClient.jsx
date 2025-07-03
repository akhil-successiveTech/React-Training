import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

// We have created an apollo client here
export function apolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'https://graphqlzero.almansi.me/api',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
