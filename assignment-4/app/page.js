"use client"
import Link from "next/link";

export default function QuestionLinks() {
  const totalQuestions = 14;
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((q) => (
          <li key={q}>
            <Link style={{border: "2px solid black"}} href={`./Question-${q}`}>Question-{q}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
