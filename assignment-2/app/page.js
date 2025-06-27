"use client"
import Link from "next/link";
import { Children, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {

  const[count, setCount] = useState(0);

  return (
  <>
    <Link href="/Question-1" style={{padding: "10px 10px"}}>Question-1</Link>
    <br/>
    <Link href="/Question-2" style={{padding: "10px 10px"}}>Question-2</Link>
    <br/>
    <Link href="/Question-3" style={{padding: "10px 10px"}}>Question-3</Link>
    <br/>
    <Link href="/Question-4" style={{padding: "10px 10px"}}>Question-4</Link>
    <br/>
    <Link href="/Question-5" style={{padding: "10px 10px"}}>Question-5</Link>
    <br/>
    <Link href="/Question-6" style={{padding: "10px 10px"}}>Question-6</Link>
    <br/>
    <Link href="/Question-7" style={{padding: "10px 10px"}}>Question-7</Link>
    <br/>
    <Link href="/Question-8" style={{padding: "10px 10px"}}>Question-8</Link>
    <br/>
    <Link href="/Question-9" style={{padding: "10px 10px"}}>Question-9</Link>
    <br/>
    <Link href="/Question-10" style={{padding: "10px 10px"}}>Question-10</Link>
    <br/>
    <Link href="/Question-11" style={{padding: "10px 10px"}}>Question-11</Link>
    <br/>
    <Link href="/Question-12" style={{padding: "10px 10px"}}>Question-12</Link>
    <br/>
    <Link href="/Question-13" style={{padding: "10px 10px"}}>Question-13</Link>
    <br/>
    <Link href="/Question-14" style={{padding: "10px 10px"}}>Question-14</Link>
    <br/>
    <Link href="/Question-15" style={{padding: "10px 10px"}}>Question-15</Link>
    <br/>
    <Link href="/Question-16" style={{padding: "10px 10px"}}>Question-16</Link>
    <br/>
    <Link href="/Question-17" style={{padding: "10px 10px"}}>Question-17</Link>
    <br/>
    <Link href="/Question-18" style={{padding: "10px 10px"}}>Question-18</Link>
    <br/>
    <Link href="/Question-19" style={{padding: "10px 10px"}}>Question-19</Link>
  </>
  );
}