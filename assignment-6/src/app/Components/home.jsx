"use client";
export default function HomeComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e6ecf0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#222", fontSize: "28px", marginBottom: "15px" }}>
          This is the Home Page with Lazy Loading
        </h1>
        <strong style={{ color: "#444", fontSize: "16px" }}>
          Use /about after removing question-1 from url to navigate to about page and lazy load it
        </strong>
      </div>
    </div>
  );
}