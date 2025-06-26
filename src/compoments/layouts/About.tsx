import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row className="g-4 about-content">
          <Col xs={12} sm={10} md={6} lg={6} xl={5} className="about-left">
            <p>
              <h2 id="about-me-title" className="mb-4">
                About Me
              </h2>
              I am a full-stack web Developer with experience in React (Next.js
              Framework), SQL, Bootstrap and SASS. I have participated in
              building simple backend systems, creating APIs, and developing
              frontend interfaces.
            </p>
            <p>
              I am passionate about solving problems and continuously improving
              my skills. I am very excited to learn more and contribute to
              projects.
            </p>
            <p>
              I hope to become a Senior Developer in the next few years, where I
              can maximize my abilities and experience.
            </p>
          </Col>
          <Col xs={12} sm={10} md={6} lg={6} xl={5} className="about-right">
            <div className="info-card p-6 rounded-lg">
              <Row className="g-4">
                <Col xs={12} sm={6}>
                  <div
                    className="info-item d-flex align-items-center gap-3"
                    role="group"
                    aria-labelledby="name-label name-value"
                  >
                    <div
                      className="icon-circle me-3 icon-blue"
                      aria-hidden="true"
                    >
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <p id="name-label" className="label fw-normal">
                        Name
                      </p>
                      <p id="name-value" className="value fw-semibold mb-0">
                        Do Xuan Quy
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div
                    className="info-item d-flex align-items-center gap-3"
                    role="group"
                    aria-labelledby="experience-label experience-value"
                  >
                    <div
                      className="icon-circle me-3 icon-purple"
                      aria-hidden="true"
                    >
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <p id="experience-label" className="label fw-normal">
                        Experience
                      </p>
                      <p
                        id="experience-value"
                        className="value fw-semibold mb-0"
                      >
                        1 Years
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div
                    className="info-item d-flex align-items-center gap-3"
                    role="group"
                    aria-labelledby="location-label location-value"
                  >
                    <div
                      className="icon-circle me-3 icon-blue"
                      aria-hidden="true"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p id="location-label" className="label fw-normal">
                        Location
                      </p>
                      <p id="location-value" className="value fw-semibold mb-0">
                        District 12, HCM
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div
                    className="info-item d-flex align-items-center gap-3"
                    role="group"
                    aria-labelledby="availability-label availability-value"
                  >
                    <div
                      className="icon-circle me-3 icon-purple"
                      aria-hidden="true"
                    >
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div>
                      <p id="availability-label" className="label fw-normal">
                        Availability
                      </p>
                      <p
                        id="availability-value"
                        className="value fw-semibold mb-0"
                      >
                        Open to Opportunities
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
