// multiple states in hooks using object 
// updation with previous value
// function component

import { useState } from "react";

function Scooter(){
    const [Scooter, setScooter] = useState({
        color : 'red',
        brand : 'Honda',
        model : 'Activa',
        year  : '2023'
    })
    
    function updateColor(){
        setScooter((previousState)=> {
            return {...previousState, color : 'orange'}
        })
    }

    return(
        <>
            <h1>My Scooter</h1>
            <p>color : {Scooter.color}</p>
            <p>brand : {Scooter.brand}</p>
            <p>model : {Scooter.model}</p>
            <p>year  : {Scooter.year}</p>
            {/* <button onClick={updateColor}>CHANGE COLOR</button> */}
            <button onClick={() => {
                setScooter((previousState)=>{ // to regain the previous state of the object elements
                    return {...previousState, color : 'Orange'} // ... - spread Operator
                })
            }}>
                CHANGE COLOR
            </button>
        </>    
    )
}
export default Scooter;