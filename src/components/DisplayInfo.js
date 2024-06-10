import React from "react";

class DisplayInfor extends React.Component{
    render() {
        console.log(this.props)
        const {name,age} =this.props
        return(
        <div>
            <div>My name's {name}</div>
            <div>I'm {age} years old</div>
        </div>
        )
    }
}
export default DisplayInfor;