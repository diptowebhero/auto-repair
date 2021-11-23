import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/user.png";
const Testimonial = (props) => {
  const { name, description, rating, address, photoURL } = props.testimonial;
  return (
    <Col className="mb-5 text-center service">
      <Fade bottom duration={2500} distance="40px">
        <Card
          className="border-0 py-4 shadow card-container"
          style={{ height: "20rem" }}
        >
          {!photoURL ? (
            <Card.Img
              variant="top"
              height="100"
              className="rounded-circle"
              src={img}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <Card.Img
              variant="top"
              className="rounded-pill"
              src={photoURL}
              style={{
                width: "100px",
                margin: "auto",
                objectFit: "contain",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            />
          )}
          <Card.Body className="pt-0 card-bodys">
            <Card.Title as="h5" className="my-4 title">
              {name}
            </Card.Title>
            <Card.Title as="h5" className="my-4 title">
              {address}
            </Card.Title>
            <Card.Text as="h6" className="text-muted">
              <Rating
                className="text-warning"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={rating}
                readonly
              />{" "}
            </Card.Text>
            <Card.Text as="p" className="text-muted">
              {description.slice(0,90)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};

export default Testimonial;
