import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import "./Stripe.css";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_live_51Mna6BLp0rpluRaniTfV4bWOXmGIBTIYkaq3HA3IkjqyowHrWDhwo5Fti8iCMB1sLeovVe1X0dQ9eSZuxcIfBa1u00AIdYN6wX"
);
export const StripeForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const apperance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    apperance,
  };
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
