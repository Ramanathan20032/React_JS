import React from "react";

function Result(props){
    let result;
    const {randomNumber, term} = props

    if(term){
        if(term > randomNumber){
            result = 'Higher'
        }
        else if(term < randomNumber){
            result = 'Lower'
        }
        else if(term == randomNumber){
            result = 'Yeah, Correct'
        }
        else{
            result = 'Invalid Input'
        }
    }

    return(
        <h3>You Guessed : {result}</h3>
    )
}
export default Result;