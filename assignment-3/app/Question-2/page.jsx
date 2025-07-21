import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";
import Child from "./Child";

const Auth = () => {
  return (
    <>
      <div>
        <AuthProvider>
          <ThemeProvider>
            <Child />
          </ThemeProvider>
        </AuthProvider>
      </div>
    </>
  );
};

export default Auth;