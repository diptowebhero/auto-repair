import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonial.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import loader from "../../../assets/images/loader.gif";
import 'swiper/swiper-bundle.min.css'
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  SwiperCore.use([Pagination, Autoplay]);
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
            <Swiper
              loop={true}
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
            >
              <Row xs={1} md={3} className="mx-auto pt-5">
                {reviews?.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    {" "}
                    <Testimonial testimonial={testimonial} />
                  </SwiperSlide>
                ))}
              </Row>
            </Swiper>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
