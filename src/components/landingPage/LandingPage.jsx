import React from "react";
import { Container } from "react-bootstrap";
import hero from "./hero3.jpg";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="d-flex justify-items-center align-items-center"
      style={{
        width: "100%",
        height: "",
      }}
    >
      <div
        className="d-flex justify-items-center align-items-center"
        style={{
          backgroundColor: "#f8f5fc",
          width: "40%",
          flexDirection: "column",
        }}
      >
        <div>
          <h3>My Toys</h3>
        </div>
        <div>
          <h5
            style={{
              color: "#fd7e14",
            }}
          >
            Joy For Your Kids
          </h5>
        </div>
        <div className="col1" style={{ color: "#34aadc" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quisquam, labore corporis odit exercitationem sapiente eaque! Odit
            est temporibus necessitatibus asperiores, quam eligendi porro
            praesentium quaerat, reiciendis voluptates unde! Perspiciatis
            veritatis officiis, ipsa consectetur sit atque beatae ipsum corrupti
            et!
          </p>
        </div>
        <div>
          <Link to="/products">
            <button className="rounded btn-shop">Shop Now</button>
          </Link>
        </div>
      </div>
      <div
        className="img01"
        style={{
          backgroundColor: "#f8f5fc",
        }}
      >
        <img
          src={hero}
          alt="hero"
          className="img-fluid h-100"
          style={{
            maxwidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
