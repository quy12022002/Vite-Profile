import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="contact-container">
      <Container>
        <h2 className="contact-title text-center">Let's connect</h2>
        <p className="text-center">
          Interested in working together or have a question? Feel free to
          contact me using the form below or through any of the provided contact
          methods.
        </p>
        <Row className="justify-content-between">
          <Col xs={12} sm={10} md={6} lg={4} xl={5}>
            <div className="form-container">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="mb-3"
              >
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group controlId="validationName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="validationEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!validateEmail(email) && email.length > 0}
                      />
                      <Form.Control.Feedback type="invalid">
                        {email.length === 0
                          ? "Please enter email"
                          : "Invalid email (eg: example@domain.com)"}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="validationSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your subject"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter subject
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="validationMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter message
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="send-message" type="submit">
                  SEND MESSAGE
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} sm={10} md={6} lg={4} xl={5}>
            <div className="contact-info">
              <div>
                <img
                  src="src/assets/email.jpg"
                  alt="Contact Email"
                  className="rounded-lg rounded img-fluid"
                  height="320"
                  width="480"
                />
              </div>
              <div className="contact-item pt-3">
                <div className="contact-icon email">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">dev.doxuanquy@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon phone">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+84 845 455 584</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon location">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">Tan Dong Hiep, Di An, HCM</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
