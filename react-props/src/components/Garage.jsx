import Car from "./Car";
import Car1 from "./Car1";
import Apple from "./Apple";

function Garage(){
    const brand = 'Ferrari'
    // sending props using object for function components
    const carInfo = {
        brand : 'Ford',
        color : 'Black',
        gear : '5' 
    }
    // sending props using object for class components
    const appleInfo = {
        type : 'Fujji',
        color : 'Red'
    }
    return(
        <>
         <h1>Who lives inside the Garage ?</h1>
    {/* brand(property) = {brand}(variable) */ }
         <Car brand = {brand} color = {'Blue'} gear = '6'/>
           {/* property = object */}
         <Car1 carInfo = {carInfo}/>
         <Apple appleInfo = {appleInfo}/>
        </> 
    )
}
export default Garage;