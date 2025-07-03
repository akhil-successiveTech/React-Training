import { apolloClient } from './apolloClient';
import { GET_BOOKS } from './query';

export default async function BooksPage() {
  const client = apolloClient();

  const { data } = await client.query({
    query: GET_BOOKS,
    variables: { page: 1, limit: 5 },
  });

  const books = data.posts.data;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
