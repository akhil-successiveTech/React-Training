"use client";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import React, { useContext } from "react";

const About = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>{loggedIn ? <h1>This is a login page</h1> : redirect("/assignment-3/question-4/Login")}</>
  );
};

export default About;