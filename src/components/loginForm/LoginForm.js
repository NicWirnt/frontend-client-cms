import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAction } from "../../pages/login/LoginAction";
import { setToast } from "../../systemState/systemSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.user);

  const nav = useNavigate();

  useEffect(() => {
    user._id && nav("/") && dispatch(setToast(false));
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      Alert("Please insert email and password");
    }

    dispatch(loginUserAction(form));
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
      <h1>Welcome</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            name="email"
            onChange={handleOnChange}
          />
          <Form.Text className="text-muted">
            Please enter you email address
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="text-end">
          <Link className="" to="/register">
            Register
          </Link>
        </div>
        <div className="text-end">
          Forget Password? <a href="/forget-password">Reset Password</a> Now
        </div>
      </Form>
    </div>
  );
};
