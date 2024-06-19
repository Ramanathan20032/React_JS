import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0)

    function handleButton(){
        setCount(count + 1)
    }

    return(
        <>
            <p>Clicked : {count}</p>
            <button onClick={handleButton}>Click</button>
        </>
    )
}