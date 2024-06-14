import Car from "./Car";
import Apple from "./Apple";

// Functional Components
function Garage(){
    return(
        // 1 - parent elementrent element ; 2 - child element - jsx should have only one parent element.
        <>
            <h1>who lives inside My Garage</h1>
            <Car/>
            <Apple/>
        </>
    )
}
export default Garage;