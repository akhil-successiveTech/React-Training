// Child component

const Child = ({count, buttonClicked, reset}) => {
    return(
        <>
        <p>This is the child component. Count: {count}</p>
        <button style={{border: "2px solid black", margin: "4px 4px"}} onClick={buttonClicked}>Increment</button>
        <button style={{border: "2px solid black"}} onClick={reset}>Reset it</button>
        </>
    )
}

export default Child;