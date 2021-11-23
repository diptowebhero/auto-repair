import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonial.css";
import loader from "../../../assets/images/loader.gif";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://nameless-woodland-81515.herokuapp.com/review")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="testimonials">
      <Container>
        <div className="text-center py-5 services">
          <h5>Our Customer Say</h5>
          <h1>Testimonial</h1>
          {reviews?.length === 0 ? (
            <div className="text-center">
              <img src={loader} alt="" />
            </div>
          ) : (
            <Row xs={1} md={3} className="mx-auto pt-5">
              {reviews?.map((testimonial) => (
                <Testimonial key={testimonial._id} testimonial={testimonial} />
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
