// app/about/page.tsx
"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function About() {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !loggedIn) {
      router.push("/Question-4/Login");
    }
  }, [loggedIn, loading]);

  if (loading) return <p>Loading...</p>;
  if (!loggedIn) return null;

  return (
    <div>
      <h1>About Page</h1>
      <p>This page is protected and only visible to logged-in users.</p>
    </div>
  );
}
