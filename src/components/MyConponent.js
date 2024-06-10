import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfor from './DisplayInfo';
class MyConponent extends React.Component {
    //JSX
    render() {
        const myAge = 19;
        const myInfo = ["a","b","c","d"]
        return (
            <div>
                <UserInfo />
                <br/><br/>
                <DisplayInfor name='Nam' age={myAge} myInfor = {myInfo}/>
            </div>
        );
    }
}
export default MyConponent;