import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    {/* amra navbar brand er href er moddhe / slash set kore dise jokhon amra logo hae click korbo sheita home route e niye jabe...amra as={} as er moddhe Link set kore dise aita link er moto behaviour korbe kinto amader href er poriborte to dite hbe karon link to er upor depend kore kaj kore amra as use korar karone logo img e jokhon click korbo tokhon reload korbe nh home route e niye ashabe */}
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height={30} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                            /* amra id set kortase click korle shei jaygay chole jabe normally amra home er services e jaite chai kinto amra about er route e ase kinto services e jete partase nh tai amra 1st e home dise ter #id-name set kortase...amra services er moddhe click korle jei route ae thaki nh kno amader home er jei services shei khane chole jabe... */ href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout}>Signout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;