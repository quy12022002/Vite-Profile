import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <Container>
        <h2 className="education-title text-center">Education</h2>
        <p className="text-center">
          A comprehensive overview of my technical skills and areas of expertise
          in software development and design.
        </p>
        <Row className="education-content g-4 justify-content-around">
          <Col xs={12} sm={10} md={6} lg={6} xl={5}>
            <div className="card p-5 h-100">
              <div className="">
                <h3 id="exp1-title">Diploma in Information Technology</h3>
                <p className="school">
                  Thu Duc College of Technology (2021-2025)
                </p>
              </div>
              <div className="description">
                During my time at school, I learned and mastered the basics of
                C#, PHP (Laravel Framework), JavaScript, Bootstrap, and MySQL.
                In addition, I also learned more about technologies such as
                React, Node, TypeScript, Sass, and MongoDB, which helped me
                improve my programming skills and develop web applications more
                effectively.
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={10}
            md={6}
            lg={6}
            xl={5}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <img
                src="src/assets/tdc.jpg"
                alt="Logo"
                loading="lazy"
                className="h-auto w-100 shadow-lg rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Education;
