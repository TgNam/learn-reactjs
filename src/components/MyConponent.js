import React from 'react'

class MyConponent extends React.Component {
    state = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    }
    hendleClick(event){
        console.log(">>>click me my button")
        console.log(this.state.name)
    }
    hendleOnMoverOver(event){
        console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} yeard old\
                <button onMouseOver={this.hendleOnMoverOver}>Click me</button>
                <button onClick={this.hendleClick}>Click me</button>
            </div>
        );
    }
}
export default MyConponent;