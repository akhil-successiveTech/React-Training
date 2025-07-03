"use client";

import { useAuth } from "../Context/AuthContext";
import { AuthProvider } from "../Context/AuthContext";
import SecretPage from "../Components/SecretPage";
import withAuth from "../Components/withAuth";

const ProtectedSecretPage = withAuth(SecretPage);

function PageContent() {
  const { user, login, logout } = useAuth();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Next.js HOC Auth Demo</h1>

      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Akhil")}>Login</button>
      )}

      <hr style={{ margin: "1rem 0" }} />
      <ProtectedSecretPage />
    </main>
  );
}

export default function HomePage() {
  return (
    <AuthProvider>
      <PageContent />
    </AuthProvider>
  );
}
