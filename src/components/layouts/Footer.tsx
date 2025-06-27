import { Container, Nav } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3">
      <Container className="footer-container">
        <Nav className="list-unstyled d-flex flex-column flex-md-row justify-content-between align-items-center mb-0">
          <div className="d-flex gap-3 ">
            <Nav.Link className="footer-icon">
              <FaGithub />
            </Nav.Link>
            <Nav.Link className="footer-icon">
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link className="footer-icon">
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link className="footer-icon">
              <BsTwitterX />
            </Nav.Link>
          </div>
        </Nav>
        <p className="mb-0 text-white text-center text-md-start">
          © 2025 copyright all right reserved by DoXuanQuy
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
