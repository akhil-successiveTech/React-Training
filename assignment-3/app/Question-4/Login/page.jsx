import { AuthProvider } from "@/app/context/AuthContext";
import Login from "@/app/Component/Login";


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