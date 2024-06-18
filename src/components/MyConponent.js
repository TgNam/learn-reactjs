import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfor from './DisplayInfo';

const MyComponent = () => {
    const initialList = [
        { id: 1, name: "Nam", age: 19, address: "HaiDuong" },
        { id: 2, name: "Tung", age: 18, address: "HaiDuong" },
        { id: 3, name: "Hoang", age: 19, address: "HoaBinh" },
        { id: 4, name: "Long", age: 25, address: "TuyenQuang" }
    ];

    const [listArr, setListArr] = useState(initialList);

    const handleAddNewUser = (userObj) => {
        setListArr([...listArr, userObj]);
    };

    const handleDeleteUser = (userid) => {
        const updatedList = listArr.filter((item) => item.id !== userid);
        setListArr(updatedList);
    };

    return (
        <>
            <div className='a'>
                <AddUserInfo handleAddNewUser={handleAddNewUser} />
                <br /><br />
                <DisplayInfor listArr={listArr} handleDeleteUser={handleDeleteUser} />
            </div>
            <div className='b'>
                {/* Other content can go here */}
            </div>
        </>
    );
};

export default MyComponent;
