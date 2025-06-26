import { Button, Col, Container, Row } from "react-bootstrap";
import TypingEffect from "../common/TypingEffect";

const Content = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center content-container"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={6} xl={5}>
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
          <Button className="btn-custom" type="button">
            LET'S START
          </Button>
        </Col>
        <Col xs={12} sm={10} md={6} lg={6} xl={5}></Col>
      </Row>
    </Container>
  );
};
export default Content;
