import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import img1 from '../../../assets/Footer/descover.png'
import img2 from '../../../assets/Footer/download.png'
import img3 from '../../../assets/Footer/script.png'
import img4 from '../../../assets/Footer/skkil.png'
import img5 from '../../../assets/Footer/visa.png'
const Footer = () => {
    return (
        <div className="footer-area">
      <Container>
        <Row xs={1} md={4} className="w-100 mx-auto">
          <Col className="mt-5">
            <div>
              <div>
                <h2 className="fw-bold">Auto Repair</h2>
              </div>
              <div className="mt-4">
                <p>
                  Desirous of doing a Jain pilgrimage tour of Uttar Pradesh
                  which has many important
                </p>
              </div>
            </div>
            <div>
              <h3 className="fw-bold">Follow Us:</h3>
              <div className="d-flex icon">
                <div>
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div>
                  <i class="fab fa-instagram"></i>
                </div>
                <div>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <div>
              <div>
                <h3 className="fw-bold">Contact Us</h3>
              </div>
              <div className="icons">
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div className="mx-3">
                    <p className="m-0">+01852-1265122</p>
                    <p className="m-0">+01852-1265122</p>
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div className="mx-3">
                    <p className="m-0">info@example.com</p>
                    <p className="m-0">support@example.com</p>
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="mx-3">
                    <p className="m-0">2752 Willison Street Eagan</p>
                    <p className="m-0">United State</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <div>
              <h3 className="fw-bold">Support</h3>
              <div>
                <p>Contact</p>
                <p>About</p>
                <p>Destinations</p>
                <p>Our blog</p>
                <p>Services</p>
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <div>
              <div>
                <h3 className="fw-bold mb-3">We Accept</h3>
                <div className="footer-payment">
                  <div>
                    <img
                      src={img1}
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={img2}
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={img3}
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={img4}
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={img5}
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr/>
        <p className="text-center">Copyright 2021 Auto Repair | Design By Dip</p>
      </Container>
    </div>
    );
};

export default Footer;