import { Col, Container, Row } from "react-bootstrap";
import { LuMedal, LuMusic } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { RiBookLine } from "react-icons/ri";

const Activities = () => {
  return (
    <div className="activity-container" id="activity">
      <Container>
        <h2 className="activity-title text-center">Personal Activities</h2>
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
                  I enjoy reading books on history, poetry, cultural life and
                  personal development.
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
                <p>I listen to music when I'm stressed and on rainy days.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} className="pb-3">
            <div className="card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle icon-photography me-3">
                  <MdOutlineCameraAlt />
                </div>
                <h5 className="fw-semibold mb-0 text-white">Visual Arts</h5>
              </div>
              <div>
                <p>
                  I find joy in capturing the beauty of everyday life through
                  videos and photos, transforming them into unique artistic
                  creations.
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
                <p>
                  I like playing soccer, playing games and going to the gym.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Activities;
