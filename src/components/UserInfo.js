import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    }
    hendleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    hendleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    hendleOnSubmit = (event) => {
        event.preventDefault();
        console.log("My name is" + this.state.name)
    }
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} years old

                <form onSubmit={(event) => this.hendleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type='text'
                        value={this.state.name}
                        onChange={(event) => { this.hendleOnChangeName(event) }} />
                    <button>Click me</button>
                    <label>Your age:</label>
                    <input type='text'
                        value={this.state.age}
                        onChange={(event) => { this.hendleOnChangeAge(event) }} />
                    <button>Click me</button>
                </form>
            </div>
        )
    }
}
export default UserInfo;