// useEffect is one most used function in React

// In useEffect, it monitors the property if the property is changed, 
// it executes the callback function.

import { useEffect, useState } from "react";

function Timer(){
    
    // **syntax of useEffect function**
                          
    /* useEffect(() => {}, [])
    useEffect(callBackFunction, [property]) */

    const [count, setCount] = useState(1)

    // **useEffect (hook) function with parameter**
    useEffect(() => {
        console.log('Page Reloaded')
        checkCount()
        // setCount(1)
    },[count])


    // **useEffect (hook) function without parameter**
    useEffect(() => {
        setTimeout(() => {
            setCount((previousState) => { return previousState + 1 })
        }, 1000)
    })

    function updateCount(){
        setCount((previousState) => { return previousState + 1 })
    }

    function checkCount(){
        if(count > 10){
            setCount(1)
        }
    }

    return(
        <>
            <h2>I have Rendered {count} Times</h2>
            <button onClick={updateCount}>Render</button>
        </>
    )
}
export default Timer;