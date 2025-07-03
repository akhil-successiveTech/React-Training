// Create a functional component called CounterWithStep. Use the useState hook to manage a state variable 
// named count initialized to 0. Render the current value of count in a <p> element. Add two buttons, 
// one for incrementing the count and another for decrementing it.

import CounterWithStep from "../components/CounterWithStep";

const Home = () => {
    return (
        <>
            <CounterWithStep/>
        </>
    )
}

export default Home;