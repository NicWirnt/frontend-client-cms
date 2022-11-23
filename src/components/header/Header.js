import React from "react";
import logo from "../../img/logo.png";
import { NavBarComp } from "../navBar/NavBar";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="py-2 bg-dark">
      <Row className="">
        <Col className="m-2">
          <InputGroup className="">
            <Form.Control placeholder="What are you looking?" />
            <Button variant="primary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
        <Col className="text-center">
          <div className="">
            <img src={logo} style={{ width: "4rem", height: "4rem" }} />
          </div>
        </Col>
        <Col className="text-end m-2">
          <Button
            style={{ width: "3rem", height: "3rem" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <i class="fas fa-shopping-cart"></i>
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
              2
            </div>
          </Button>
        </Col>
      </Row>

      <NavBarComp />
    </div>
  );
};
