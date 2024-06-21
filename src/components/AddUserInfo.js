import React, { useState } from "react";

const AddUserInfo = (props) => {
    const initState = {
        name: "Nam",
        address: "HaiDuong",
        age: 19
    };
    const [state, setState] = useState(initState);
    const [stateName, setStateName] = useState("Nam");
    const [stateAge, setStateAge] = useState(19);
    const [stateAddress, setStateAddress] = useState("Hải Dương");

    const handleOnChangeName = (event) => {
        // setState((prevState) => ({
        //     ...prevState,
        //     name: event.target.value,
        // }));
        setStateName(event.target.value)
    };

    const handleOnChangeAge = (event) => {
        // setState((prevState) => ({
        //     ...prevState,
        //     age: event.target.value
        // }));
        setStateAge(event.target.value)
    };

    const handleOnChangeAddress = (event) => {
        // setState((prevState) => ({
        //     ...prevState,
        //     address: event.target.value
        // }));
        setStateAddress(event.target.value)
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
            My name is {stateName} and I'm from {stateAddress}. I'm {stateAge} years old.

            <form onSubmit={handleOnSubmit}>
                <label>Your name:</label>
                <br />
                <input
                    type="text"
                    value={stateName}
                    onChange={handleOnChangeName}
                />
                <br />
                <label>Your age:</label>
                <br />
                <input
                    type="text"
                    value={stateAge}
                    onChange={handleOnChangeAge}
                />
                <br />
                <label>Your address:</label>
                <br />
                <input
                    type="text"
                    value={stateAddress}
                    onChange={handleOnChangeAddress}
                />
                <br />
                <button type="submit">Click me</button>
            </form>
        </div>
    );
};

export default AddUserInfo;
