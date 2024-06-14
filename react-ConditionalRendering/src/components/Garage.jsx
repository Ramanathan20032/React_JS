import Car from "./Car";
import Apple from "./Apple";

// conditonal Rendering - ternary operator[? :]  And operator[&&] 
function Garage(){
    const isDoorOpened = false

    // const carInfo = {}
    const carInfo = { color : 'black', brand : 'ford', gear  : '6'}
    const appleInfo = { color : 'red', type : 'fuji' }

    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined && carInfo.gear !== undefined 
    return(
        <>
          <h1>who lives inside my Garage ?</h1>
          {/* if true it render else nothing to render it */}
          { showCarInfo && <Car carInfo = {carInfo}/> }
          <Apple appleInfo = {appleInfo}/>
          { isDoorOpened ? <h3>Garage is Open</h3> : <h3>Garage is Closed</h3> }
        </>          
    )
}
export default Garage;