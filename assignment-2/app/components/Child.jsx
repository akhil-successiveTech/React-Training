// Child component

const Child = ({count, buttonClicked, reset}) => {
    return(
        <>
        <p>This is the child component. Count: {count}</p>
        <button onClick={buttonClicked}>Increment</button>
        <button onClick={reset}>Reset it</button>
        </>
    )
}

export default Child;