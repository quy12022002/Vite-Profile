import { Button, Col, Container, Row } from "react-bootstrap";
import TypingEffect from "../common/TypingEffect";

const Content = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const navbarHeight = navbar.offsetHeight;
      const sectionTop =
        contactSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="content-container">
      <Container fluid className="min-vh-100 d-flex align-items-center ">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={12} md={6} lg={6} xl={5}>
            <p className="intro-text d-flex align-items-center">
              HI{" "}
              <span className="wave-emoji" aria-label="waving hand" role="img">
                👋
              </span>
              , I'M DO XUAN QUY
            </p>
            <h1 className="highlight-text">
              I'M <TypingEffect />
            </h1>
            <p className="sub-text">Full Stack Developer & Content Creator.</p>
            <Button
              className="btn-custom"
              type="button"
              onClick={scrollToContact}
            >
              LET'S START
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={5}></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Content;
