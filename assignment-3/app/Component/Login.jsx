"use client";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setLoggedIn, handleAuth } = useContext(AuthContext);
  const myUserName = "Akhil";
  const myPassword = "123456";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName == myUserName && password == myPassword) {
      setLoggedIn(true);
      handleAuth();
      alert("User Logged in");
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="">
          {" "}
          UserName
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          {" "}
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </>
  );
};

export default Login;