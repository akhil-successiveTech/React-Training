import AuthComponent from "@/components/assignment-3/AuthComponent";
import { AuthProvider } from "../context/AuthContext";
import Login from "../Component/Login";

const Auth = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <AuthProvider>
          <AuthComponent />
        </AuthProvider>
      </div>
    </>
  );
};

export default Auth;