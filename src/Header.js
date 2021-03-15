import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    let user = JSON.parse(
        localStorage.getItem('user-info')
    );

    const history = useHistory();
    function logOut() {

        localStorage.clear();
        history.push('/login');

    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Ecomm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>

                            </>
                            : <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }


                </Nav>
                {
                    localStorage.getItem('user-info') ?
                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }

            </Navbar>
        </div>

    )
}

export default Header;