import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../systemState/systemSlice";

const BootstrapToastify = () => {
  const dispatch = useDispatch();

  const { showToast, status, message } = useSelector(
    (state) => state.systemSlice
  );

  const toggleShowA = () => dispatch(setToast(!showToast));

  return (
    <Row
      className="position-fixed"
      style={{
        right: 0,
      }}
    >
      <Col className="mb-4">
        <Toast show={showToast} onClose={toggleShowA} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{status}</strong>
            <small>{}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default BootstrapToastify;
