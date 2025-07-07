import React from "react";

function UserProfile({ name, email, phone }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "320px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        }}
      >
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>User Profile</h2>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Name:</strong> <span>{name}</span>
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Email:</strong> <span>{email}</span>
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Phone:</strong> <span>{phone}</span>
        </p>
      </div>
    </div>
  );
}

export default UserProfile;