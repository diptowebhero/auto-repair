import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

import useAuth from "../../../Hook/useAuth";
import "./Payment.css";
const useOptions = () => {
  const options = useMemo(() => ({
      style: {
          base: {
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#495057",
              letterSpacing: "0.025em",
              "::placeholder": {
                  color: "#aab7c4"
              }
          },
          invalid: {
              color: "#9e2146"
          }
      }
  }), []);
  return options;
};
const StripePaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const options = useOptions();
  const navigate = useNavigate();
  const { AllContext } = useAuth();
  const { user } = AllContext;
  const { email, displayName } = user;
  const { bookingId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setOrder] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://nameless-woodland-81515.herokuapp.com/order/${bookingId}`)
      .then((response) => response.json())
      .then((data) => setOrder(data[0]));
  }, [bookingId]);

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } 
    Swal.fire({
      icon: "warning",
      title: "Do you want to confirm your order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://nameless-woodland-81515.herokuapp.com/addOrder", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            ...data,
            ...product,
            paymentId: paymentMethod?.id,
            orderTime: new Date().toLocaleString(),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire("Confirmed!", "", "success");
              navigate("/dashboard/bookList");
            }
          });
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
          <Col md={6} xs={12} className="pr-md-4">
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={displayName}
                {...register("name")}
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <Form.Control
                type="text"
                defaultValue={email}
                {...register("email")}
                placeholder="Email Address"
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Address(City)
              </Form.Label>
              <Form.Control
                type="text"
                {...register("address", { required: true })}
                placeholder="Address"
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="pr-md-4">
            <Form.Group>
              <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
              <Form.Control
                type="text"
                {...register("price")}
                defaultValue={product?.price}
                disabled
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Service Name
              </Form.Label>
              <Form.Control
                type="text"
                {...register("serViceName")}
                defaultValue={product?.title}
                disabled
              />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>Phone</Form.Label>
              <Form.Control
                type="text"
                {...register("phone")}
                placeholder="Phone"
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="pr-md-4">
            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Card Number
              </Form.Label>
              <CardNumberElement className="form-control" options={options} required/>
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="pr-md-4">
            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>
                Expiration Date
              </Form.Label>
              <CardExpiryElement className="form-control" options={options} required/>
            </Form.Group>
          </Col>

          <Col md={6} xs={12} className="pr-md-4">
            <Form.Group className="mt-2">
              <Form.Label style={{ fontWeight: "bold" }}>CVC</Form.Label>
              <CardCvcElement className="form-control" options={options} required/>
            </Form.Group>
          </Col>
        </Row>
        <div>
          {error && (
            <p className="m-0 text-center text-danger fw-bold">{error}</p>
          )}
        </div>
        <div className="text-center mt-5">
          <button
            variant="info"
            type="submit"
            disabled={!stripe}
            className="main-button"
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default StripePaymentForm;
