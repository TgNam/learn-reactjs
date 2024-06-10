import React from 'react'

class MyConponent extends React.Component {
    state = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    }
    hendleOnChange = (event) => {
        this.setState({
            name: event.target.value,
            age: Math.floor(Math.random() * 100 + 1)
        })
    }
    hendleOnSubmit=(event)=>{
        event.preventDefault();
        console.log("My name is"+this.state.name)
    }
    //JSX
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} years old

                <form onSubmit={(event)=>this.hendleOnSubmit(event)}>
                    <input type='text'
                        onChange={(event) => { this.hendleOnChange(event) }} />
                    <button>Click me</button>
                </form>
            </div>
        );
    }
}
export default MyConponent;