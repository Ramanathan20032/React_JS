import { useState } from "react";

function Scooter(){
    // **Multiple states in hooks** 

    // const [color, setColor] = useState('Grey')
    // const [brand, setBrand] = useState('Honda')
    // const [model, setModel] = useState('Activa 6G')
    // const [year, setYear] = useState('2023')

    // *************************************************

    // **Multiple States in hooks using Object**

    const [Scooter, SetScooter] = useState(
        {
            color : 'grey',
            brand : 'Hoonda',
            model : 'Activa 6G',
            year : '2023'
        }
    )

    return(
        <>
            <h2>My Scooter</h2>
            <p>color : {Scooter.color}</p>
            <p>Brand : {Scooter.brand}</p>
            <p>Model : {Scooter.model}</p>
            <p>Year  : {Scooter.year}</p>
        </>
    )
}
export default Scooter;