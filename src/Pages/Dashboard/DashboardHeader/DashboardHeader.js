import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';

const DashboardHeader = () => {
    const{ AllContext} =useAuth();
    const{logOut} = AllContext;
    return (
        <>
      <Navbar expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand className="nav-logo" href="#home">
            Auto Repair
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link>
                  <button onClick={logOut} className="logout-btn">
                    Log Out
                  </button>
                </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default DashboardHeader;