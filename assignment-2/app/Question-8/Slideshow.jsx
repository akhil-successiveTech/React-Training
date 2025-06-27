"use client"

import { useState } from "react"

export default function Slideshow(){
    const [count, setcount] = useState(0)
    const [arr,setarr]  = useState([       
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./images/6.jpg",
        "./images/7.jpg",
        "./images/8.jpg",
        "./images/9.jpg",
        "./images/10.jpg",
    ])
    console.log(arr[0])


    return(
        <>
            <img src={arr[count]} alt="Image of Clock" style={{padding: "10px 10px"}} />
            <button onClick={()=> setcount(count+1)}>Change Image</button>
        </>
    )
}