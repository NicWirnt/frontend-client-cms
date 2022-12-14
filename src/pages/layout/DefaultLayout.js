import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Footer } from "../../components/footer/Footer";

import { Header } from "../../components/header/Header";
import { NavBar } from "../../components/navBar/NavBar";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="">
      <Header />

      <Container>
        <div className="main">{children}</div>
      </Container>

      <Footer />
    </div>
  );
};
