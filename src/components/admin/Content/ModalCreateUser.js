import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ModalCreateUser.scss'
import axios from "axios";
const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPasswork("")
        setUsername("")
        setRole("USER")
        setImage("")
        setPreviewImage("")
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPasswork] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const [previewImage, setPreviewImage] = useState("")
    const handUploadImage = (event) => {
        if (event.target && event.target.value && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            setPreviewImage("")
        }
    }
    const handleSubmitCreate = async () => {
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // }
        // console.log(data)
        const isValidateEmail =validateEmail(email)
        if(!isValidateEmail){
            alert('invalid email')
            return;
        }

        //submit data
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);

        let res = await axios.post('http://localhost:8081/api/v1/participant', data);
        console.log(">>>>>check var", res)

        handleClose()
    }
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                <IoIosAddCircleOutline /> Add new User
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(event) => setPasswork(event.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupRole">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select aria-label="Default select example" onChange={(event) => setRole(event.target.value)} value={role}>
                                            <option value="USER">User</option>
                                            <option value="ADMIN">Admin</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="formGroupFile">
                                    <Form.Label><IoIosAddCircleOutline /> Upload file image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        hidden
                                        onChange={(event) => handUploadImage(event)}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="preview-image border border-secondary">
                                <Col>
                                    {
                                        previewImage ?
                                            <img src={previewImage} />
                                            :
                                            <span >Preview Image</span>
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreate}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser