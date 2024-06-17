import { useState } from "react";

function MyForm(){

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [email, setEmail] = useState('')

    /* Handling Multiple inputs using Object */

    // setting initial values to the states
    const [inputs, setInputs] = useState({phoneNo: '+91', email:'@gmail.com', country:'India', about:`I'm a Student.`})

    function handleSubmit(event){
        // prevent the default submission 
        event.preventDefault();
        console.log('Form Submitted')
        console.log('current State ', inputs)
    }

    // Simplfying onChange()
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setInputs((previousState) => {
            // when the new property added inside the {empty object} should be enclosed within the [] brackets
            return{...previousState, [name] : value}
        })
    }
    //  <input type="text" onChange={(event) => {setInputs((previousState) => {return {...previousState, name : event.target.value}} )} }/> 

    return(
        // (onsubmit) on the time of form submission handleSubmit() is called
        <form onSubmit={handleSubmit}>
            <label>Enter your Name </label>
            {/* onchange(EventListner) used to track the change in input box */}
            {/* (event) parameter has the details of the input */}
            <input type="text" name="name" onChange={handleChange}/>
            {/* <input type="text" onChange={(event) => {setInputs((previousState) => {return {...previousState, name : event.target.value}} )} }/> */}
            <br />
            <label>Enter your Age </label>
            <input type="text" name="age" onChange={handleChange}/>
            <br />
            <label>Enter your Email </label>
            <input type="text" name="email" value={inputs.email} onChange={handleChange}/>
            {/* Getting the default values state [variableName.object] */}
            <br />
            <label>Enter your PhoneNo </label>
            <input type="text" name="phoneNo" value={inputs.phoneNo} onChange={handleChange}/>
            <br />
            <label>Enter your Country</label>
            <select name="country" value={inputs.country} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
            </select>
            <br />
            <label>Enter about you : </label>
            <textarea name="about" value={inputs.about} onChange={handleChange} />
            <input type="submit" value="Submit Form"/>
        </form>
    )
}
export default MyForm;
