import React from "react";

class AddUserInfo extends React.Component {
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
    hendleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    hendleOnSubmit = (event) => {
        event.preventDefault();
        // console.log("My name is" + this.state.name)
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: +this.state.age,
            address:this.state.address
        });
    }
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} years old

                <form onSubmit={(event) => this.hendleOnSubmit(event)}>
                    <label>Your name:</label>
                    <br/>
                    <input type='text'
                        value={this.state.name}
                        onChange={(event) => { this.hendleOnChangeName(event) }} />
                    <br/>
                    <label>Your age:</label>
                    <br/>
                    <input type='text'
                        value={this.state.age}
                        onChange={(event) => { this.hendleOnChangeAge(event) }} />
                    <br/>
                    <label>Your address:</label>
                    <br/>
                    <input type='text'
                        value={this.state.address}
                        onChange={(event) => { this.hendleOnChangeAddress(event) }} />
                    <br/>
                    <button>Click me</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfo;