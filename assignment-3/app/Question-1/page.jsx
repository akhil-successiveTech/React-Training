import { AuthProvider } from "../context/AuthContext";
import Child from "./Child";

const Auth = () => {
  return (
    <>
      <p className="question">
        Q1. create two components: a parent component that acts as a provider
        and a child component that consumes the context. Create a context to
        manage a user's authentication status (logged in or out). Implement a
        login button in the child component that, when clicked, updates the
        authentication status in the context to "logged in." Display a message
        in the child component based on the user's authentication status. If the
        user is logged in, show "Welcome, [username]!" Otherwise, display
        "Please log in."
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <AuthProvider>
          <Child/>
        </AuthProvider>
      </div>
    </>
  );
};

export default Auth;  