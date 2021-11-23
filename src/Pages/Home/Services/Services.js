import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../Hook/useAuth";
import Service from "../Service/Service";
import "./Services.css";
import loader from "../../../assets/images/loader.gif";
const Services = () => {
  const { services } = useAuth();
  return (
    <Container>
      <div className="text-center py-5 services">
        <h5>What We Do</h5>
        <h1>Services We Provide</h1>
        {services?.length === 0 ? (
          <div className="text-center">
            <img src={loader} alt="" />
          </div>
        ) : (
          <Row xs={1} md={3} className="justify-content-center mx-auto pt-5">
            {services?.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default Services;
