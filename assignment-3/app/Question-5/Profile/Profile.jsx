"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const Profile = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? (
    <>
      <h1>This is Profile page</h1>
    </>
  ) : (
    redirect("/Question-4/Login")
  );
};

export default Profile;