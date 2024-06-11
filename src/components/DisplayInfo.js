import React from "react";
import './DisplayInfo.scss'
// import logo from './../logo.jpg'
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    hendleShowHide() {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log(this.props)
        const { listArr } = this.props
        console.table(listArr)
        return (
            <div className="display-info-conatier">
                {/* <img src={logo} alt="Logo" /> */}
                <div >
                    <span onClick={() => { this.hendleShowHide() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}</span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listArr.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className={item.age > 18 ? "red" : "green"}>
                                            <div>ID: {item.id}</div>
                                            <div>My name's {item.name}</div>
                                            <div>I'm {item.age} years old</div>
                                            <div>I'm from {item.address}</div>
                                            <button onClick={() => this.props.handleDeleteUser(item.id)}>X</button>
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
}
export default DisplayInfor;