"use client";
import { useState } from "react";

const PersonForm = () => {
  // Created useState for first, last name and age
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
    {/* Created a form */}
      <form>
        <label>
          {" "}
          Enter your first name:
          <input
            type="text"
            value={firstName}
            style={{border: "2px solid black"}}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Enter your last name:
          <input
            type="text"
            value={lastName}
            style={{border: "2px solid black"}}
            onChange={(e) => setLast(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Enter your age:
          <input
            type="number"
            min = "1"
            value={age}
            style={{border: "2px solid black"}}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {/* Displayed changes in the useStates */}
        <li style={{border: "2px solid black", width: "300px"}}>First name: {firstName}</li>
        <li style={{border: "2px solid black", width: "300px"}}>Last name: {lastName}</li>
        <li style={{border: "2px solid black", width: "300px"}}>Age: {age}</li>
      </ul>
    </>
  );
}

export default PersonForm;