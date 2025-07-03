"use client";
import { useState } from "react";
import axios from "axios";

export default function UsersClient({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(!initialUsers ? "Failed to load users." : "");
  const [loading, setLoading] = useState(false);

  const handleRetry = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      setError("Retry failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
