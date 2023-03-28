import React from "react";
import logo from "../../img/logo.png";
import { NavBarComp } from "../navBar/NavBar";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cartTotal } = useSelector((state) => state.cart);

  return (
    <div className="py-2 bg-light fs-5">
      <Row>
        <Col className="m-2">
          MY TOYS{/* LOGO IMAGE */}
          {/* <img src={logo} style={{ width: "5rem", height: "5rem" }} /> */}
        </Col>
        <Col className="d-flex justify-content-end m-2">
          <div className="d-flex justify-content-end">
            <Nav>
              <Nav.Link>
                <Link to="/login" className="text-black">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/register" className="text-black">
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </div>
          <Link to="/cart">
            <Button
              style={{ width: "3rem", height: "3rem" }}
              variant="outline-danger"
              className="rounded-circle"
            >
              <i className="fas fa-shopping-cart"></i>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  // bottom: 0,
                  // right: 0,
                  transform: "translate(50%, -25%)",
                }}
              >
                {cartTotal}
              </div>
            </Button>
          </Link>
        </Col>
      </Row>

      <NavBarComp />
    </div>
  );
};
