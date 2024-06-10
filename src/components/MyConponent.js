import React from 'react'

class MyConponent extends React.Component {
    state = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    }
    //JSX
    render() {
        return (
            <div>
                My  name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age} yeard old
            </div>
        );
    }
}
export default MyConponent;