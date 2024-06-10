import React from 'react'

class MyConponent extends React.Component {
    state = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    }
    hendleClick(event){
        console.log(">>>click me my button")
        console.log("My name is"+this.state.name)
        this.setState({
            name: "TungTai",
            age: Math.floor(Math.random() * 100+ 1)
        })
    }
    hendleOnMoverOver(event){
        console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} years old
                <button onMouseOver={this.hendleOnMoverOver}>Click me</button>
                <button onClick={(event)=> {this.hendleClick(event)} }>Click me</button>
            </div>
        );
    }
}
export default MyConponent;