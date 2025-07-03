"use client";
import { useEffect, useState } from "react";

// Spinner styling (can customize or use MUI later)
const Spinner = () => (
  <div style={{ marginTop: "1rem" }}>
    <div style={{
      width: "40px",
      height: "40px",
      border: "4px solid #ccc",
      borderTop: "4px solid #000",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      margin: "auto"
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Main component
export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users on first render
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch function using native fetch
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Unable to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Users</h1>

      {/* Loading Spinner */}
      {loading && <Spinner />}

      {/* Error Message + Retry */}
      {!loading && error && (
        <div style={{ color: "red", marginTop: "1rem" }}>
          <p>{error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {/* User List */}
      {!loading && !error && (
        <ul style={{ marginTop: "1rem" }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
