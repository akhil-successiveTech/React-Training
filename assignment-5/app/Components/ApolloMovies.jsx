// app/books/page.jsx
import { createApolloClient } from '@/lib/apolloClient';
import { GET_BOOKS } from '@/graphql/queries';
import BookListClient from '../components/BookListClient'; // client component

export default async function BooksPage() {
  const page = 1;
  const limit = 5;

  const client = createApolloClient();

  const { data } = await client.query({
    query: GET_BOOKS,
    variables: { page, limit },
  });

  const books = data.posts.data;
  const total = data.posts.meta.totalCount;

  return (
    <div>
      <h1>Server-Fetched Books</h1>
      <BookListClient initialBooks={books} total={total} limit={limit} />
    </div>
  );
}
