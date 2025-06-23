"use client"

import { useState } from "react"

export default function ToDoList([list]){
    const[ToDoList, setList] = useState()

    return(
        <p>{list}</p>
    )
}