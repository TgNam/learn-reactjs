import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title text-center">
                <h1>ManageUser</h1>
            </div>
            <div className="users-content">
                <div>
                    <ModalCreateUser/>
                </div>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>namntph33821@fpt.edu.vn</td>
                                <td>
                                    <Button variant="secondary" className='mx-5'>Views</Button>
                                    <Button variant="warning" className='me-5'>Update</Button>
                                    <Button variant="danger" className='me-5'>Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <Button variant="secondary" className='mx-5'>Views</Button>
                                    <Button variant="warning" className='me-5'>Update</Button>
                                    <Button variant="danger" className='me-5'>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;