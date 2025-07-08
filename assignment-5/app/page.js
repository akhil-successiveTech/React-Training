import Link from "next/link";

export default function Home() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16];

  return (
    <>
      {questions.map((num) => (
        <div key={num}>
          <Link style={{border: "2px solid black", margin: "4px"}} href={`./Question-${num}`}>Question-{num}</Link>
        </div>
      ))}
    </>
  );
}
