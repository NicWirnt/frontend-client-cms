import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { passCheck } from "../../helper/passwordChecker";
import { registerUserAction } from "../../pages/register/RegisterAction";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);
  const [messsage, setMessage] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setMessage("");
    !disableButton && setDisableButton(true);

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;
      password.length < 6 &&
        setMessage("Password must be at least 6 characters");
      !/[a-z]/.test(password) && setMessage("Password must contain lowercase");
      !/[A-Z]/.test(password) && setMessage("Password must contain uppercase");
      !/[0-9]/.test(password) && setMessage("Password must contain number");
      !form.password && setMessage("Password must be provided");
      return;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError(true);
      setMessage("Password doesn't match, please check your password");
      return;
    }

    setError(false);

    const { confirmPassword, ...rest } = form;

    dispatch(registerUserAction(rest));
  };

  const toDisableButton = () => {
    !error && setDisableButton(false);
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
            autoComplete=""
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
            autoComplete=""
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleOnChange}
            onBlur={toDisableButton}
            required
          />
        </Form.Group>
        <div className="text-danger fw-bold mb-2 bg-secondary rounded p-2">
          {messsage
            ? messsage
            : "Please make sure your password contain each of lowercase, uppurcase and number"}
        </div>

        <div className="text-end mb-3">
          Already an existing customer?
          <br />
          <Link to="/login">Click here to login</Link>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit" disabled={disableButton}>
            Register
          </Button>
          <Button varian="danger" type="reset">
            Clear
          </Button>
        </div>
      </Form>
    </div>
  );
};
