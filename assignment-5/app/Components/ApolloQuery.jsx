'use client';

import { useQuery, gql } from '@apollo/client';
import client from '../Question-8/apolloClient';
import { ApolloProvider } from '@apollo/client';

// Defined query
const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

function Countries() {
  // useQuery pass this query to the given
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.countries.map((country) => (
        <li key={country.code}>
          {country.emoji} {country.name}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  );
}
