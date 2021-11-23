import React from "react";
import "./Banner.css";
import Fade from "react-reveal/Fade";
import bannerImg from "../../../assets/images/43025-removebg-preview.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <Container>
      <Row className="w-100 mx-auto align-items-center">
        <Col md={6} sm={12}>
          <Fade left duration={2000} distance="40px">
            <div className="banner-text">
              <h2>Auto Repair & Maintenance</h2>
              <p>
                We provide always our best <br /> equestrian training for our
                clients.
              </p>

              <Link to="/morService">
                <Button className="btn-banner" variant="">
                  Explore More
                </Button>
              </Link>
            </div>
          </Fade>
        </Col>
        <Col md={6} sm={12}>
        <Fade right duration={2000} distance="40px">
          <img src={bannerImg} className="w-100" alt="" />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
