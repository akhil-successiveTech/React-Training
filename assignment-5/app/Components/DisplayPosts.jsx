"use client";

export default function DisplayPosts({ data }) {
  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {data?.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
