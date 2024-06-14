function Car(props){
    const {carInfo} = props
    const {color, brand, gear} = carInfo
    const text = `hi.. Im a ${color} ${brand} Car with ${gear} Gear's`
    return(
        <h2>{text}</h2>
    )
}
export default Car;