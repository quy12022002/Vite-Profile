import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const Content = () => {
    return (
          <>
          <Container
            fluid
            className="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          >
            <h1 className="mt-5 mb-5">
              Hello, I'm Xuan Quy
            </h1>
            <p className="mb-5 mt-2 fs-5 text-light">
              Full Stack Web Developer & Backend Programming Enthusiast
            </p>
            <div className="mb-5 mt-3 d-flex justify-content-center gap-3 flex-wrap">
              <Button className="btn-contact px-4 py-2" type="button">
                Contact Me
              </Button>
              <Button
                variant="outline-secondary"
                className="btn-projects px-4 py-2"
                type="button"
              >
                View Projects
              </Button>
            </div>
            <div className="social-icons mb-5 d-flex justify-content-center">
              <a href="#" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <button className="scroll-down-btn" aria-label="Scroll Down" type="button">
              <span>Scroll Down</span>
              <i className="fas fa-chevron-down"></i>
            </button>
          </Container></>
        );
}

export default Content;