import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { AllContext } = useAuth();
  const { registerNewUser, error } = AllContext;
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your Password  Did Not Match!",
      });
      return;
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      location,
      navigate
    );
  };
  return (
    <Container className="py-5 my-5 text-center">
      <div className="form-container">
        <form onSubmit={handleRegister} className="shadow">
          <h1>Register</h1>
          <p className="m-0 text-danger fw-bold">{error}</p>
          <input
            onBlur={handleOnblur}
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            onBlur={handleOnblur}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            onBlur={handleOnblur}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            onBlur={handleOnblur}
            name="password2"
            type="password"
            placeholder="Re-Type Password"
            required
          />
          <button type="submit">Register</button>
          <Link to="/login" className="fw-bold toggle py-2">
            Already Register? Please Login
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Register;
