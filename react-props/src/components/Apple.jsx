import React from "react";

// props - properties 
class Apple extends React.Component{
    render(){
        const {appleInfo} = this.props
        const {color, type} = appleInfo
        return(
            <h3>Im a {color} {type} Apple</h3>
        );
    }
}
export default Apple;