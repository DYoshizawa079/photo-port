// Import the useState method so we can use states
import React, { useState } from "react"

function Test() {
    
    // Declare the state
    const [count, setCount] = useState(0);

    let updatedCount = count;

    function increment(){
        // The function that changes the state
        updatedCount += 1;
        setCount(updatedCount);
    }
    
    return (
        <div>
            Ive been clicked {count} times
            <button onClick={increment}>Add One</button>
        </div>
    )
}
export default Test;