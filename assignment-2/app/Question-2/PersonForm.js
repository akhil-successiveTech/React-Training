"use client";
import { useState } from "react";

export default function personForm() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <form>
        <label>
          {" "}
          Enter your first name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Enter your last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLast(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Enter your age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </form>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Age: {age}</li>
      </ul>
    </>
  );
}
