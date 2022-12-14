import React from "react";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import BootstrapToastify from "../../components/toastify/BootstrapToastify";
import { DefaultLayout } from "../layout/DefaultLayout";

export const Register = () => {
  return (
    <DefaultLayout>
      <div
        className=""
        style={{
          marginBottom: "100px",
          // minHeight: "100%",
          position: "",
          minWidth: "100%",
        }}
      >
        <BootstrapToastify />
        <RegisterForm />
      </div>
    </DefaultLayout>
  );
};
