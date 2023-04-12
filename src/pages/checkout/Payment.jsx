import React from "react";
import { DefaultLayout } from "../layout/DefaultLayout";
import { StripeForm } from "../../components/stripe/StripeForm";
import { useSelector } from "react-redux";

const Payment = () => {
  const { cart } = useSelector((state) => state.cart);

  const ttl = cart.reduce(
    (total, item) => total + item.cartQty * item.price,
    0
  );

  return (
    <DefaultLayout>
      <div className="m-2 w-100 d-flex flex-column justify-items-center align-items-center ">
        <div>
          <h4>
            Complete your payment of <b>${ttl}</b>
          </h4>
        </div>
        <div className="m-3 bg-light">
          <StripeForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Payment;
