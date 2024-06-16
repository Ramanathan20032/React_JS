import { useState } from "react";
// updating Arrays in a State
function List(){
    const [list, setList] = useState([])
    const [count, setCount] = useState(1)

    function addItem(){
        const itemName = 'item'+count
        setList((previousStatus) => { return [...previousStatus, itemName] })
        setCount((previousStatus) => { return previousStatus+1 })
    }

    return(
        <>
            <h1>List</h1>
            <button onClick={addItem}>Add Item</button>
            { list.map((element, index)=> {return <li key={index}>{element}</li>}) }
        </>
    )
}
export default List;