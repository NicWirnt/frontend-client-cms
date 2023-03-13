import React from "react";
import logo from "../../img/logo.png";
import { NavBarComp } from "../navBar/NavBar";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cartTotal } = useSelector((state) => state.cart);

  return (
    <div className="py-2 bg-light fs-5">
      <Row>
        <Col className="text-center">
          <div className="">
            <img src={logo} style={{ width: "5rem", height: "5rem" }} />
          </div>
        </Col>
      </Row>
      <Row className="">
        <Col xs={5} className="m-2 sm-6">
          <InputGroup className="">
            <Form.Control placeholder="Search Item" />
            <Button variant="primary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>

        <Col className="text-end m-2 sm-6">
          <Button
            style={{ width: "3rem", height: "3rem" }}
            variant="outline-danger"
            className="rounded-circle"
          >
            <Link to="/cart">
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
            </Link>
          </Button>
        </Col>
      </Row>

      <NavBarComp />
    </div>
  );
};
