"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const totalQuestions = 19;

  return (
    <>
      {Array.from({ length: totalQuestions }, (_, i) => (
        <div key={i}>
          <Link href={`/Question-${i + 1}`} style={{ padding: "10px 10px" }}>
            Question-{i + 1}
          </Link>
          <br />
        </div>
      ))}
    </>
  );
}
