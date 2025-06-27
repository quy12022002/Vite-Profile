import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="experience-container">
      <Container>
        <h2 className="experience-title text-center">Work Experience</h2>
        <p className="text-center pb-4">
          My professional journey through various roles and companies,
          showcasing my growth and expertise in software development.
        </p>
        <Row className="experience-content">
          <div className="timeline-circle circle-1"></div>
          <div className="timeline-circle circle-2"></div>
          <div className="timeline-circle circle-3"></div>
          <Col xs={12} sm={10} md={6} lg={6} xl={5}>
            <article
              className="experience-card left-card"
              role="region"
              aria-labelledby="exp1-title"
            >
              <div className="header-flex">
                <div className="icon-wrapper" aria-hidden="true">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div>
                  <h3 id="exp1-title">Intern Fullstack web Developer</h3>
                  <p className="company">MEVIVU TECHNOLOGY</p>
                </div>
              </div>
              <p className="date">09/2024 - 11/2024</p>
              <p className="description">
                Using Visual Studio Code to develop web applications using
                Laravel Framework and jQuery, build RESTful APIs to integrate
                for mobile applications, use WordPress to build websites on
                demand, and use Paint to create logos and banners for customers.
                Implement APIs that work well for mobile applications, and build
                websites on the WordPress platform to meet requirements.
              </p>
            </article>
          </Col>
          <Col xs={12} sm={10} md={6} lg={6} xl={5}></Col>
          <Col xs={12} sm={10} md={6} lg={6} xl={5}></Col>
          <Col xs={12} sm={10} md={6} lg={6} xl={5}>
            <article
              className="experience-card right-card"
              role="region"
              aria-labelledby="exp2-title"
            >
              <div className="header-flex">
                <div className="icon-wrapper" aria-hidden="true">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div>
                  <h3 id="exp2-title">Intern web development</h3>
                  <p className="company">Thu Duc College of Technology</p>
                </div>
              </div>
              <p className="date">05/2023 - 03/2025</p>
              <p className="description">
                Assist in improving and developing website features through
                testing to enhance user experience. Additionally, I create and
                post articles, images, and videos related to events and
                activities on the school website.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Experience;
