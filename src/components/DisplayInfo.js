import React, { useState } from "react";
import './DisplayInfo.scss'
// import logo from './../logo.jpg'
// class DisplayInfor extends React.Component {
//     render() {
//         // console.log(this.props)
//         const { listArr } = this.props
//         // console.table(listArr)
//         return (
//             <div className="display-info-conatier">
//                 {true &&
//                     <>
//                         {listArr.map((item) => {
//                             return (
//                                 <div key={item.id}>
//                                     <div className={item.age > 18 ? "red" : "green"}>
//                                         <div>ID: {item.id}</div>
//                                         <div>My name's {item.name}</div>
//                                         <div>I'm {item.age} years old</div>
//                                         <div>I'm from {item.address}</div>
//                                         <button onClick={() => this.props.handleDeleteUser(item.id)}>X</button>
//                                         <hr />
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listArr } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    return (
        <div className="display-info-conatier">
            <div>
                <span onClick={() => handShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listArr.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className={item.age > 18 ? "red" : "green"}>
                                    <div>ID: {item.id}</div>
                                    <div>My name's {item.name}</div>
                                    <div>I'm {item.age} years old</div>
                                    <div>I'm from {item.address}</div>
                                    <button onClick={() => props.handleDeleteUser(item.id)}>X</button>
                                    <hr />
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}
export default DisplayInfor;