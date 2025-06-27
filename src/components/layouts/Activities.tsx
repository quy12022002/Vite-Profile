import { Col, Container, Row } from "react-bootstrap";
import { LuMedal, LuMusic } from "react-icons/lu";
import { RiBookLine } from "react-icons/ri";

const Activities = () => {
  return (
    <div className="activitie-container">
      <Container>
        <h2 className="activitie-title text-center">Personal Activities</h2>
        <p className="text-center pb-4">
          Beyond coding, these are the activities and interests that keep me
          inspired and balanced.
        </p>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="pb-3">
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-reading me-3">
                  <RiBookLine />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Reading</h5>
              </div>
              <div>
                <p>
                  I enjoy science fiction, psychology, horror and personal
                  development books.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="pb-3">
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-music me-3">
                  <LuMusic />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Music</h5>
              </div>
              <div>
                <p>
                  I listen to music in my spare time and enjoy attending live
                  concerts and music festivals.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="pb-3">
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-photography me-3">
                  <RiBookLine />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Photography</h5>
              </div>
              <div>
                <p>
                  Capturing landscapes, cityscapes and street life through my
                  lens whenever I want.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="pb-3">
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-sports me-3">
                  <LuMedal />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Sports</h5>
              </div>
              <div>
                <p>I like playing soccer and going to the gym.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Activities;
