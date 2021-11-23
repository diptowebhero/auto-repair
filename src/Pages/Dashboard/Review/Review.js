import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import "./Review.css";
const Review = () => {
  const navigate = useNavigate()
  const { AllContext } = useAuth();
  const { user } = AllContext;
  const { displayName ,photoURL} = user;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.photoURL = photoURL;
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Thanks for your awesome Feedback!", "", "success");
          navigate('/')
        }
      });
  };
  return (
    <Form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="form-main py-5 my-5 shadow-lg"
        style={{ borderRadius: "15px", maxWidth: "85rem" }}
      >
        <Row>
          <h3 className="text-center mb-4 fw-bold">Give a Feedback</h3>
          <Col md={8} xs={12} className="pr-md-4">
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
              <Form.Control
                style={{ height: "50px" }}
                type="text"
                {...register("name")}
                defaultValue={displayName}
              />
            </Form.Group>
          </Col>
          <Col md={4} xs={12} className="pr-md-4">
            <Form.Group className="">
              <Form.Label style={{ fontWeight: "bold" }}>Rating</Form.Label>
              <Form.Select {...register("rating")} style={{ height: "50px" }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12} xs={12} className="pr-md-4">
            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Address(City)
              </Form.Label>
              <Form.Control
                style={{ height: "50px" }}
                type="text"
                {...register("address", { required: true })}
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "150px" }}
                type="text"
                {...register("description", { required: true })}
                placeholder="Say something"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <button variant="info" type="submit" className="main-button">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Review;
