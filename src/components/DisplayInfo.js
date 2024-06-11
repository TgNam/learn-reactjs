import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // console.log(this.props)
        const { listArr } = this.props
        return (
            <div>
                {listArr.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>ID: {item.id}</div>
                            <div>My name's {item.name}</div>
                            <div>I'm {item.age} years old</div>
                            <div>I'm from {item.address}</div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        )
    }
}
export default DisplayInfor;