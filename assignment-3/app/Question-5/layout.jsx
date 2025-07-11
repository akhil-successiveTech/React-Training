import { AuthProvider } from "../context/AuthContext";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          width: "300px",
          padding: "1rem",
          borderRight: "1px solid #ccc",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/question-5">Dashboard</Link>
          </li>
          <li>
            <Link href="/Question-5/Profile">Profile</Link>
          </li>
          <li>
            <Link href="/Settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: "1rem", flexGrow: 1 }}>
        <AuthProvider>{children}</AuthProvider>
      </main>
    </div>
  );
}