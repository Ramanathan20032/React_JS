export default function Products(){
    const products = [
        {name : "apple", isfruit : true, id : 1},
        {name : "orange", isfruit : true, id : 2},
        {name : "potato", isfruit : false, id : 3}
    ]

    const listItems = products.map((product) => {
        return <li key={product.id}
            style={{
                color : product.isfruit ? 'green' : 'black'
            }}
        >
            {product.name}
        </li>
    })

    return(
        <ul>{listItems}</ul>
    )
}