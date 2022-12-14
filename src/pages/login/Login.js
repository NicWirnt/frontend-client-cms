import React from "react";
import { Button, Form } from "react-bootstrap";
import { LoginForm } from "../../components/loginForm/LoginForm";
import BootstrapToastify from "../../components/toastify/BootstrapToastify";
import { DefaultLayout } from "../layout/DefaultLayout";

export const Login = () => {
  return (
    <DefaultLayout>
      <div
        className=""
        style={{
          marginTop: "100px",
          // minHeight: "100%",
          // position: "",
          // minWidth: "100%",
          background: "white",
        }}
      >
        <BootstrapToastify />
        <LoginForm />
      </div>
    </DefaultLayout>
  );
};
