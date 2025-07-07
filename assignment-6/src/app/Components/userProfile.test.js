import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  test("renders user data correctly", () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    };

    render(
      <UserProfile
        name={userData.name}
        email={userData.email}
        phone={userData.phone}
      />
    );

    // Assert that all user data is displayed
    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByText(userData.name)).toBeInTheDocument();

    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(userData.email)).toBeInTheDocument();

    expect(screen.getByText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByText(userData.phone)).toBeInTheDocument();
  });
});