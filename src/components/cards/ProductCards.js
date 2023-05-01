import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseFromCart,
  removeFromCart,
  setToCart,
} from "../../pages/cart/CartSlice";

export const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleOnReduce = (item) => {
    dispatch(decreaseFromCart(item));
  };

  const handleOnRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleOnClick = (item) => {
    dispatch(setToCart(item));
  };
  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-4 mb-4">
      {products.map((item, idx) => (
        <Col key={item._id}>
          <Card
            style={{
              background: "#f8f5fc",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Card.Img
              style={{ width: "200px", height: "200px" }}
              crossOrigin="anonymous"
              variant="top"
              src={
                process.env.REACT_APP_IMAGE_SERVER_URL +
                item.thumbnail.substr(6)
              }
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/product/${item._id}`}>{item.name}</Link>
              </Card.Title>
              <Card.Text>
                {item.salesPrice > 0 ? `$${item.salesPrice}` : `$${item.price}`}
                <br />

                {cart.map((cartItem, cartIdx) => (
                  <>
                    {cartItem?._id === item._id && (
                      <>
                        <div className="d-flex flex-row justify-items-center align-items-center">
                          <div className="w-100 ">
                            <Button
                              variant="outline-danger"
                              className="mx-3"
                              onClick={() => handleOnReduce(item)}
                            >
                              -
                            </Button>
                            <b>{cartItem.cartQty}</b>

                            <Button
                              variant="outline-danger"
                              onClick={() => handleOnClick(item)}
                              className="mx-3  "
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Button
                            className="rounded my-2"
                            variant="outline-primary"
                            onClick={() => handleOnRemoveFromCart(item)}
                          >
                            Remove from Cart
                          </Button>
                        </div>
                      </>
                    )}
                  </>
                ))}

                {!cart.some((cartItem) => cartItem._id === item._id) && (
                  <Button
                    className="w-100"
                    onClick={() => handleOnClick(item)}
                    variant="outline-primary"
                  >
                    Add To Cart
                  </Button>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
