import React from "react";
import { Button, Form } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <div
      style={{
        width: "400px",
        margin: "auto",
        background: "#D5D8DC",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "5px 5px 20px #17202A ",
      }}
      className="mt-5"
    >
      <h1>Welcome</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="text-end">
          <a href="/register">Register</a>
        </div>
        <div className="text-end">
          Forget Password? <a href="/forget-password">Reset Password</a> Now
        </div>
      </Form>
    </div>
  );
};
