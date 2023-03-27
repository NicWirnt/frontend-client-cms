import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImangeSlider } from "../../components/imageSlider/ImangeSlider";
import { ImageMagnifier } from "../../components/imgMagnifier/ImageMagnifier";
import { DefaultLayout } from "../layout/DefaultLayout";
import "./cart.css";
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";

export const Cart = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);

  const ttl = cart.reduce(
    (total, item) => total + item.cartQty * item.price,
    0
  );

  return (
    <DefaultLayout>
      <h1 className="mt-2">Cart</h1>

      {cart?.length === 0 ? (
        <tr>
          <td>
            <h1>Your cart is empty</h1>
          </td>
        </tr>
      ) : (
        <div className="d-flex flex-container">
          <Table striped size="sm" className="mt-5 table1">
            <thead>
              <td className="text-center">
                <h5>Products</h5>
              </td>
              <td></td>
              <td>
                <h5>Price</h5>
              </td>
              <td>
                <h5>Total</h5>
              </td>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <>
                  <tr key={i}>
                    <td>
                      <ImangeSlider images={item.images} />
                    </td>
                    <td>
                      <h5>{item.name} </h5>
                      <hr />
                      Qty :{item.cartQty}
                    </td>

                    <td> ${item.price}</td>

                    <td>${item.cartQty * item.price}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
          <div className="m-3">
            <h5 className="text-center">Summary</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Do you have a promo code?</Form.Label>
                <div className="d-flex">
                  <Form.Control type="text " placeholder="" />
                  <Button variant="primary" type="submit">
                    Apply
                  </Button>
                </div>
              </Form.Group>
            </Form>
            <Table>
              <tr>
                <td>Subtotal</td>
                <td className="text-end ">${ttl}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="text-end">TBD</td>
              </tr>
              <tr>
                <td>Sales Tax</td>
                <td className="text-end">TBD</td>
              </tr>
              <tr>
                <hr />
              </tr>
              <tr>
                <td>Estimated Total</td>
                <td className="text-end">${ttl}</td>
              </tr>
            </Table>
            <div className="text-end mt-5">
              <Link to="/checkout">
                <Button disabled={!cart.length}>Confirm to Payment</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};
