import axios from "axios";

export default async function PostsPage() {
  // To store the fetched data
  let posts = [];
  // To store the errors
  let error = null;

  try {
    // Await using axios
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (err) {
    error = err.message || "Failed to load posts";
  }

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 50 }}>
        Error: {error}
        {/* Retry button that runs this function again */}
        <button onClick={() => (PostsPage)}>Retry</button>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 700, margin: "30px auto", padding: "0 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: 25,
              padding: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
              backgroundColor: "#fafafa",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <strong style={{ fontSize: 18, display: "block", marginBottom: 8 }}>
              {post.title}
            </strong>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}