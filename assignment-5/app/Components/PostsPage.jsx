// This file runs on the server (SSR)
export default async function PostsPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {revalidate : 0}
    });

    const posts = await res.json();

    return(
      <>
        <h1>Posts from JSON Placeholder</h1>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </>
    )
  }
  