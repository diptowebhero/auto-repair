import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import "./Sidebar.css";
const Sidebar = () => {
  const { AllContext } = useAuth();
  const { admin } = AllContext;
  return (
    <div>
      <Row className="w-100">
        <Col className="shadow-lg sidebar" md={2} sm={12}>
          <div className="mt-4 text-center">
            <ul>
              {!admin && (
                <>
                  <li>
                    <Link to="/dashboard/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/bookList">Book List</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/review">Review</Link>
                  </li>
                </>
              )}
              {admin && (
                <>
                  <li>
                    <Link to="/dashboard/mangeOrder">Manage Orders</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/admin">Make Admin</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addService">Add Service</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div style={{ marginTop: "50vh" }} className="text-center">
            <Link to="/">
              <Button variant="info" className="main-button">
                Back Home
              </Button>
            </Link>
          </div>
        </Col>
        <Col md={10} sm={12}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
