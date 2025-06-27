"use client"

import Link from "next/link"

export default function About(){
    return(
        <>
        <p>This is the About page.</p>
        <Link href={"/"}>Go to Home</Link>
        </>
    )
}