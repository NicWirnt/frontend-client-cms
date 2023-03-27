import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { AddressForm } from "../../components/addressForm/AddressForm";
import { StripeForm } from "../../components/stripe/StripeForm";
import { DefaultLayout } from "../layout/DefaultLayout";

export const Checkout = () => {
  return (
    <DefaultLayout>
      <h4 className="text-center mt-3">Checkout Details</h4>
      <Row className="">
        <Col>
          <AddressForm />
        </Col>
        <Col md={6}>
          <StripeForm />
        </Col>
      </Row>
    </DefaultLayout>
  );
};
