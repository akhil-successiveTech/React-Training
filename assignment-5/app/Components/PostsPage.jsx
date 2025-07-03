// This file runs on the server (SSR)
export default async function PostsPage() {
    // Await to fetch data from url
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Await to convert it into json
    const posts = await res.json();

    return(
      <>
        <h1>Posts from JSON Placeholder</h1>
        {posts.map(post => (
          // Displaying data of posts
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </>
    )
  }
  