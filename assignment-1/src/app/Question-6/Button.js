// Q6: Function that accepts the color and text as props and use inline CSS to apply them
// import {useRef} from 'react'
"use client"
export default function Button({color,text}){
    // onClick command will change text and color
    return(
        <>
            <button onClick={(e)=>{
                e.target.innerHTML = text;
                e.target.style.backgroundColor = color;
            }}>Click on!</button>
        </>
    )
}