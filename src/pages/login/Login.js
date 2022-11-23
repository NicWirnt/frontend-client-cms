import React from "react";
import { Button, Form } from "react-bootstrap";
import { LoginForm } from "../../components/loginForm/LoginForm";

export const Login = () => {
  return (
    <div
      className="bg-dark"
      style={{
        minHeight: "100%",
        position: "absolute",
        minWidth: "100%",
      }}
    >
      <LoginForm />
    </div>
  );
};
