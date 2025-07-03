"use client";

import Button from "../Components/Button";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Reusable Button Demo</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {/* Primary button */}
        <Button type="primary" onClick={() => alert("Primary clicked!")}>
          Primary
        </Button>
        {/* Secondary button */}
        <Button type="secondary" onClick={() => alert("Secondary clicked!")}>
          Secondary
        </Button>
        {/* Danger button */}
        <Button type="danger" onClick={() => alert("Danger clicked!")}>
          Danger
        </Button>
      </div>
    </main>
  );
}
