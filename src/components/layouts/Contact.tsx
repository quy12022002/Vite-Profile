import React, { useEffect, useState, type FormEvent } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import imgEmail from "../../assets/email.jpg";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
          },
          EMAILJS_USER_ID
        )

        .then(() => {
          //response
          setShowToast(true);
          setToastMessage("Email sent successfully!");

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setValidated(false);
        })
        .catch(() => {
          //err
          setShowToast(true);
          setToastMessage("Failed to send message. Please try again later.");
        });
    }
  };

  const handleFocusName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFocusEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFocusSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleFocusMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="contact-container" id="contact">
      <Container>
        <h2 className="contact-title text-center">Let's connect</h2>
        <p className="text-center">
          Interested in working together or have a question? Feel free to
          contact me using the form below or through any of the provided contact
          methods.
        </p>
        <Row className="justify-content-between">
          <Col xs={12} sm={12} md={6} lg={4} xl={5}>
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
                        value={name}
                        placeholder="Your name"
                        required
                        onChange={handleFocusName}
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
                        onChange={handleFocusEmail}
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
                        value={subject}
                        placeholder="Your subject"
                        required
                        onChange={handleFocusSubject}
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
                        value={message}
                        rows={3}
                        placeholder="Your message"
                        required
                        onChange={handleFocusMessage}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter message
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="send-message" type="submit">
                  SEND MESSAGE <FiSend />
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} sm={10} md={6} lg={4} xl={5}>
            <div className="contact-info">
              <div>
                <img
                  src={imgEmail}
                  alt="Contact Email"
                  loading="lazy"
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
        <div className="position-fixed bottom-0 end-0 p-3">
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
          >
            <Toast.Header className="justify-content-between">
              <div>
                <FiSend />
                Message
              </div>
            </Toast.Header>
            <Toast.Body className="text-black">{toastMessage}</Toast.Body>
          </Toast>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
