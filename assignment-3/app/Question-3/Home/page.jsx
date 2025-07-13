// app/page.tsx
"use client";

import { useAuth } from "@/app/context/AuthContext";

export default function Home() {
  const { userName, loggedIn } = useAuth();

  return (
    <div>
      {loggedIn ? (
        <h2>Welcome, {userName}!</h2>
      ) : (
        <h2>Please login to access protected pages</h2>
      )}
      <p>This is the home page.</p>
    </div>
  );
}
