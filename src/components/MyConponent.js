import React from 'react'
import UserInfo from './UserInfo'
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
    //JSX
    render() {
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfor listArr={this.state.listArr} />
            </div>
        );
    }
}
export default MyConponent;