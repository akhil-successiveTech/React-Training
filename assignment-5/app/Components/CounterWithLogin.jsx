'use client'
const { useState, useEffect } = require("react")

const WithLogger = (WrappedComponent) =>{
    return function checkLogs(props){
        // Mounting and unmounting of component
        useEffect(() => {
            console.log(`${WrappedComponent.name} is mounted`);

            return () =>{
                console.log(`${WrappedComponent.name} is unmounted`)
            };
        }, []);

        // Updating the component
        useEffect(()=>{
            console.log(`${WrappedComponent.name} is updated`);
        });
        return <WrappedComponent {...props}/>
    }
};

const Counter = () => {
    // Component to check mounting and unmounting
    const [count , setCount] = useState(0);
    const increase = () =>{
        setCount(count + 1);
    }
    return(
        <button onClick={increase}>+</button>
    );
}

const CounterWithLogger = WithLogger(Counter);
export default CounterWithLogger;