// once the variable is declared as a state variable, then react tracks the value of the variable
//       hook - function
import { useState } from "react";

// states in functinal components
function FavoriteColor(){
    // const color = 'red'
    //  color - state variablename ; setColor - function to change the state;
    //  useState('red') - which generates the two property, then initialize the value of the variable.
    const [color, setColor] = useState('red')
    return(
        <>
            <h1>My Favorite Color is {color}</h1>
            <button onClick={()=> {setColor('blue')}}>Change Color</button>
        </>
    )
}
export default FavoriteColor;