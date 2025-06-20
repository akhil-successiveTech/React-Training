import TaskList from "./TaskList";

export default function Home(){
  const arr = ["Eating", "Driving", "Running", "Sleeping"]
  return(
    <>
      <TaskList arr={arr}/>
    </>
  )
}