"use client";
import { useAuth } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";

const Settings = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? (
    <>
      <h1>This is Profile page</h1>
    </>
  ) : (
    redirect("/assignment-3/question-4/Login")
  );
};

export default Settings;