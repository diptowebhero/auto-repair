import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Contact.css";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section id="contact">
      <div id="contact" className="contact-section">
        <Container>
          <div className="text-center">
            <h1>contact us</h1>
            <h4>We'd love to hear from you!</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="input-container">
              <Col xs={12}>
                <div className="styled-input wide">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    required
                    placeholder="Your name"
                  />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input">
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    required
                    placeholder="Your email"
                  />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input" style={{ float: "right" }}>
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    required
                    placeholder="phone"
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="styled-input wide">
                  <textarea
                    {...register("message", { required: true })}
                    required
                    placeholder="Send Message"
                  />
                </div>
              </Col>
              <Col xs={12}>
                <button className="btn-contact submit-btn btn-main">
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
