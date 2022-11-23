import React from "react";
import { RegisterForm } from "../../components/registerForm/RegisterForm";

export const Register = () => {
  return (
    <div
      className="bg-dark"
      style={{
        minHeight: "100%",
        position: "absolute",
        minWidth: "100%",
      }}
    >
      <RegisterForm />
    </div>
  );
};
