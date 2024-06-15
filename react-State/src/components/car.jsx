import React from "react";

// states in Class Component
class Car extends React.Component{
    // it extends from the react library, it has a state function
    constructor(){
        super();
        // initializing the value of a state variable
        this.state = {color : 'red'}
    }
    render(){
        return(
            <>
                <h1>My Car color is {this.state.color}</h1>
                {/* function to change the state */}
                <button onClick={()=> {this.setState({color : 'blue'})}}>
                    Change color
                </button>
            </>
        )
    }
}
export default Car;