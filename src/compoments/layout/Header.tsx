import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
    <><Navbar bg='dark' variant="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="#">
              <span>DO XUAN QUY - Github</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Experience</Nav.Link>
                <Nav.Link href="#">Skills</Nav.Link>
                <Nav.Link href="#">Education</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Activities</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar></>
    )
}

export default Header;