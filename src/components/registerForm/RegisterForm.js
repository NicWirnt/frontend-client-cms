import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUserAction } from "../../pages/register/RegisterAction";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);

    const { confirmPassword, ...rest } = form;

    dispatch(registerUserAction(rest));
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "auto",

        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "5px 5px 20px #17202A ",
      }}
      className="mt-5"
    >
      <h1>Registration</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Your First Name</Form.Label>
          <Form.Control
            placeholder="Enter your first name"
            name="fName"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Your Last Name</Form.Label>
          <Form.Control
            placeholder="Enter your last name"
            name="lName"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control
            placeholder="Enter your phone number"
            name="phone"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleOnChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <div className="text-end mb-3">
          Already an existing customer?
          <br />
          <Link to="/login">Click here to login</Link>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Button varian="danger" type="reset">
            Clear
          </Button>
        </div>
      </Form>
      <Alert variant="info" show={error}>
        Password doesn't match! Please check your password
      </Alert>
    </div>
  );
};
