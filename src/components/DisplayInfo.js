import React from "react";
import './DisplayInfo.scss'
// import logo from './../logo.jpg'
class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("call contructer")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log("....component Did Mount ")
        setTimeout(() => {
            document.title = 'Nam Pro'
        }, 3000);
    }
    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log("...call component did update", this.props, prevProp);
        if (this, this.props.listArr !== prevProp.listArr) {
            if (this.props.listArr.length === 5) {
                alert(" you got 5 users")
            }
        }
    }
    hendleShowHide() {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log(">>> call me render")
        // console.log(this.props)
        const { listArr } = this.props
        // console.table(listArr)
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