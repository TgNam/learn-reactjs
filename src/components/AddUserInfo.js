import React, { useState } from "react";

const AddUserInfo = (props) => {
    const initState = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    };
    const [state, setState] = useState(initState);

    const handleOnChangeName = (event) => {
        setState((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    const handleOnChangeAge = (event) => {
        setState((prevState) => ({
            ...prevState,
            age: event.target.value
        }));
    };

    const handleOnChangeAddress = (event) => {
        setState((prevState) => ({
            ...prevState,
            address: event.target.value
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: state.name,
            age: +state.age,
            address: state.address
        });
        setState(initState);  // Reset form after submission
    };

    return (
        <div>
            My name is {state.name} and I'm from {state.address}. I'm {state.age} years old.

            <form onSubmit={handleOnSubmit}>
                <label>Your name:</label>
                <br />
                <input
                    type="text"
                    value={state.name}
                    onChange={handleOnChangeName}
                />
                <br />
                <label>Your age:</label>
                <br />
                <input
                    type="text"
                    value={state.age}
                    onChange={handleOnChangeAge}
                />
                <br />
                <label>Your address:</label>
                <br />
                <input
                    type="text"
                    value={state.address}
                    onChange={handleOnChangeAddress}
                />
                <br />
                <button type="submit">Click me</button>
            </form>
        </div>
    );
};

export default AddUserInfo;
