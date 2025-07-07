import { AuthProvider } from "@/context/AuthContext";
import Login from "@/components/assignment-3/Login";


const LoginPage = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  );
};

export default LoginPage;