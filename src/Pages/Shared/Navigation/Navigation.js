import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { AllContext } = useAuth();
  const { logOut, user } = AllContext;
  return (
    <Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="nav-logo" href="#">
            Auto Repair
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              {!user.email ? (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link>
                  <button onClick={logOut} className="logout-btn">
                    Log Out
                  </button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
