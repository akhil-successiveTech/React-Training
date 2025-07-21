"use client";
import { useAuth } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const Profile = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? (
    <>
      <h1>This is Profile page</h1>
    </>
  ) : (
    redirect("/Question-4/Login")
  );
};

export default Profile;