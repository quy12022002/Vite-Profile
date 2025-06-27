import { Container, Nav } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3">
      <Container className="footer-container">
        <Nav className="list-unstyled d-flex flex-column flex-md-row justify-content-between align-items-center mb-0">
          <div className="d-flex gap-3 ">
            <Nav.Link
              href="https://github.com/quy12022002"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/quy120202/"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/quy120202/"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link
              href="https://x.com/quy120202"
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </Nav.Link>
          </div>
        </Nav>
        <p className="mb-0">© 2025 copyright all right reserved by DoXuanQuy</p>
      </Container>
    </footer>
  );
};

export default Footer;
