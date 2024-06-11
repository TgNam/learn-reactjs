import React from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfor from './DisplayInfo';
class MyConponent extends React.Component {
    state = {
        listArr: [
            { id: 1, name: "Nam", age: 19, address: "HaiDuong" },
            { id: 2, name: "Tung", age: 18, address: "HaiDuong" },
            { id: 3, name: "Hoang", age: 19, address: "HoaBinh" },
            { id: 4, name: "Long", age: 25, address: "TuyenQuang" }
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState(
            {
                listArr: [...this.state.listArr, userObj]
            }
        );

    }
    // handleAddNewUser = (userObj) => {
    //     this.setState((prevState) => ({
    //         listArr: [...prevState.listArr, userObj]
    //     }));
    // }
    handleDeleteUser = (userid) => {
        let listUserClone = [...this.state.listArr]
        listUserClone = listUserClone.filter((item) => item.id !== userid)
        this.setState({
            listArr: listUserClone
        })
    }
    //JSX
    render() {
        return (
            <>{/*React.Fragment*/}
                <div className='a'>
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <DisplayInfor
                        listArr={this.state.listArr}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className='b'>

                </div>
            </>
        );
    }
}
export default MyConponent;