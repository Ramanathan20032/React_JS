// multiple states in hooks using object 
// updation with previous value
// class component

import React from "react";

class Car extends React.Component{
    constructor(){
        super()
        this.state = {color : 'white', model : 'Ford'}
    }
    render(){
        return(
            <>
                <h1>my Car color is {this.state.color} and my car model is {this.state.model}</h1>
                <button onClick={()=> {
                    this.setState((previousState) => {
                        return{...previousState, color : 'pink'}
                    })
                }}>
                    Change Color
                </button>

            </>
        )
    }
}
export default Car;