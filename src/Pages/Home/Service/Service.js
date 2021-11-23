import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { title, img, desc, price ,_id} = service;
  return (
    <Col className="mb-5 text-center">
      <Fade bottom duration={2500} distance="40px">
        <Card className="border-0 p-3 container card-container shadow card-container">
          <Card.Img
            variant="top"
            height="100"
            src={`data:image/jpeg;base64,${img}`}
            style={{ objectFit: "contain" }}
          />
          <Card.Body className="pt-0 card-body">
            <Card.Title as="h5" className="my-4 title">
              {title}
            </Card.Title>
            <Card.Text as="p" className="text-muted">
              {desc}
            </Card.Text>
            <Card.Text as="h5" className="dollar">
              ${price}
            </Card.Text>
            <div>
              <Link to={`/booking/${_id}`}>
                {" "}
                <button className="btn-service">Book Now</button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};

export default Service;
