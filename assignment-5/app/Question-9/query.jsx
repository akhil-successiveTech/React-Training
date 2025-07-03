import { gql } from '@apollo/client';

// Query to pass in the uri
export const GET_BOOKS = gql`
  query GetBooks($page: Int!, $limit: Int!) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
      }
    }
  }
`;
