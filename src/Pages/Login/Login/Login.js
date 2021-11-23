import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

import "./Login.css";
const Login = () => {
  const[loginData,setLoginData] = useState({});
  const{AllContext}= useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const{loginUser, signInWithGoogle,error}=AllContext;
  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = {...loginData};
    newUserData[field] = value;
    setLoginData(newUserData);
  }
  const handleOnSubmit = e =>{
    loginUser(loginData.email,loginData.password,location,navigate);
    e.preventDefault();
  }
  const handleGoogleSignIn = () =>{
    signInWithGoogle(location,navigate)
  }
  return (
    <Container className="py-5 my-5 text-center">
      <div className="form-container">
        <form onSubmit={handleOnSubmit} className="shadow">
          <h1>Sign In</h1>
          <div className="social-container">
            <a href className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a onClick={handleGoogleSignIn} href className="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href className="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for password</span>
          <p className="m-0 text-danger fw-bold">{error}</p>
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
          <button type="submit">Login</button>
          <Link to="/register" className="fw-bold toggle py-2">
            New User? Please Create Account
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
