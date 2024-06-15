import Car from "./Car";

function Garage(){
    const isDoorOpened = false
    // const carInfo = {}
    const carInfo = {color : 'black', brand : 'ferrari', gear : '5'}
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined && carInfo.gear !== undefined

    const carList = [
        {brand : 'BMW', color : 'black', gear : '6'},
        {brand : 'Ford', color : 'red', gear : '5'},
        {brand : 'Tesla', color : 'green', gear : '6'}
    ]
    const numberList = [
        1, 2, 3, 4, 5, 6, 7, 8
    ]
    return(
        <>
            <h1>who lives inside my Garage ?</h1>
            { showCarInfo && <Car carInfo = {carInfo}/>}
            { isDoorOpened ? <h3>Garage is opened</h3> : <h3>Garage is closed</h3>}

            <ul>
                {/* Each child in the list should have a unique key */}
                { carList.map((car) => {return <li key={car.brand}><Car carInfo = {car}/></li>}) }
                {/*                                           component props     variable*/}
            </ul>
            <ul>
                {/* each element in the array have a unique index . eventhough more than one element is equal*/}
                { numberList.map((number, index) => {return <p key={index}>{number}</p>}) }
            </ul>
        </>    
    )
}
export default Garage;