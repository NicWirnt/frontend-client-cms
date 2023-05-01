import React from "react";

import { NavBarComp } from "../navBar/NavBar";
import { Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <div
      className="py-2 fs-5"
      style={{ backgroundColor: "rgba(250,229,236,255)" }}
    >
      <Row>
        <Col className="px-5 ">MY TOYS</Col>

        <NavBarComp />
      </Row>
    </div>
  );
};
