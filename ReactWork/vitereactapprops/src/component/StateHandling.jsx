import React,{useState} from "react";

function StateHandling() {
    const [counter, setCounter] = useState(20);
    function increment() {
        setCounter(counter + 1);
    }
    return (
    <div>State Handling Component

        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
    )
}



export default StateHandling