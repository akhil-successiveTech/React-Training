import Weather from "./Weather";
export default function Home() {
  const temp = 20;
  return (
      <Weather temp = {temp}/>
  );
}