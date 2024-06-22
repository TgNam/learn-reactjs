import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                {/* <Navbar.Brand href="/">Nguyễn Trường Nam</Navbar.Brand> */}
                <NavLink to={"/"} className='navbar-brand'>Nguyễn Trường Nam</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/"} className='nav-link'>Home</NavLink>
                        <NavLink to={"/users"} className='nav-link'>Users</NavLink>
                        <NavLink to={"/admins"} className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <Button className='btn-login mx-2 px-4 py-2' variant="light">Log in</Button>
                        <Button className='btn-signup mx-2 px-4 py-2' variant="dark">Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;