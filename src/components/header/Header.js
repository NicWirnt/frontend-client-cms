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

export const Header = () => {
  return (
    <div
      className="py-2 fs-5"
      style={{ backgroundColor: "rgba(250,229,236,255)" }}
    >
      <Row>
        <Col className="px-5 ">
          MY TOYS{/* LOGO IMAGE */}
          {/* <img src={logo} style={{ width: "5rem", height: "5rem" }} /> */}
        </Col>

        <NavBarComp />
      </Row>
    </div>
  );
};
