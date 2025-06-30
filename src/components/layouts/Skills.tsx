import { Col, Container, Row } from "react-bootstrap";
import { DiCode } from "react-icons/di";
import { GoDatabase } from "react-icons/go";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiServerLine } from "react-icons/ri";
import { TbApps } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="skill-container" id="skill">
      <Container>
        <h2 className="skill-title text-center">Skills & Expertise</h2>
        <p className="text-center">
          A comprehensive overview of my technical skills and areas of expertise
          in software development and design.
        </p>
        <Row className="skill-content g-4 justify-content-center">
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-ai me-3">
                  <LiaLaptopCodeSolid />
                </div>
                <h5 className="fw-semibold mb-0 text-white">
                  Programming Languages
                </h5>
              </div>
              <div>
                <span className="badge-custom">C#</span>
                <span className="badge-custom">HTML5/CSS</span>
                <span className="badge-custom">PHP</span>
                <span className="badge-custom">Java</span>
                <span className="badge-custom">JavaScript</span>
                <span className="badge-custom">TypeScript</span>
                <span className="badge-custom">Python basic</span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-backend me-3">
                  <RiServerLine />
                </div>
                <h5 className="fw-semibold mb-0 text-white">
                  Backend Development
                </h5>
              </div>
              <div>
                <span className="badge-custom">Node.js with Express</span>
                <span className="badge-custom">Laravel basic</span>
                <span className="badge-custom">RESTful APIs basic</span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-frontend me-3">
                  <DiCode />
                </div>
                <h5 className="fw-semibold mb-0 text-white">
                  Frontend Development
                </h5>
              </div>
              <div>
                <span className="badge-custom">React</span>
                <span className="badge-custom">Bootstrap</span>
                <span className="badge-custom">SASS/SCSS</span>
                <span className="badge-custom">Tailwind CSS basic</span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-database me-3">
                  <GoDatabase />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Database</h5>
              </div>
              <div>
                <span className="badge-custom">MySQL</span>
                <span className="badge-custom">Firebase basic</span>
                <span className="badge-custom">MongoDB basic</span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-uiux me-3">
                  <VscSymbolColor />
                </div>
                <h5 className="fw-semibold mb-0 text-white">UI/UX Design</h5>
              </div>
              <div>
                <span className="badge-custom">Figma</span>
                <span className="badge-custom">Responsive Design</span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-softskills me-3">
                  <TbApps />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Other Skills</h5>
              </div>
              <div>
                <span className="badge-custom">Git</span>
                <span className="badge-custom">Docker</span>
                <span className="badge-custom">AWS</span>
                <span className="badge-custom">Postman</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skills;
