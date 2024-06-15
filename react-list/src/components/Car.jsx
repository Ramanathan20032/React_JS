function Car(props){
    const {carInfo} = props
    const {color, brand, gear} = carInfo
    const text = `Hi.. Im a ${color} ${brand} Car with ${gear} Gear`
    return(
        <h2>{text}</h2>
    )
}
export default Car;