"use client"

import Link from "next/link"

export default function Navbar(){
    return(
        <nav style={{marginBottom: '5px'}}>
            <Link href={"/"} style={{marginRight: '5px'}}></Link>
            <Link href={"/about"}>About</Link>
        </nav>
    )
}