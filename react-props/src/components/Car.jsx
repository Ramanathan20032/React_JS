// props - properties
function Car(props){ // props are getting as a parameter
    // by deconstructing, separate the required variables from props
    const {brand, color, gear} = props
    const text = `Hi.. Im a ${color} ${brand} Car with ${gear} Gear`
    return(
        <h2>{text}</h2>
    )
}
export default Car;