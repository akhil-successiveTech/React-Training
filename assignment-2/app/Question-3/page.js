import ToDoList from "./ToDoList";

export default function Home(){
    const tasks = [
        {id: 1, task: "eating"},
        {id: 2, task: "drinking"},
        {id: 3, task: "sleeping"}
    ]

    return(
        <ToDoList list={tasks}/>
    )
}