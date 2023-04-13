import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseFromCart, setToCart } from "../../pages/cart/CartSlice";
import { setSelectedProduct } from "../../pages/products/ProductSlice";

export const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const itemExistInCart = products.filter((item) =>
    cart.some((cartItem) => cartItem._id === item._id)
  );

  const handleOnProductDesc = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const handleOnReduce = (item) => {
    dispatch(decreaseFromCart(item));
  };

  const handleOnClick = (item) => {
    dispatch(setToCart(item));
  };
  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-4 mb-4">
      {products.map((item, idx) => (
        <Col>
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
                <div className="d-flex flex-row justify-items-center align-items-center">
                  {item._id.includes(cart[idx]?._id) ? (
                    <div className="w-100 ">
                      <button
                        onClick={() => handleOnClick(item)}
                        className="mx-3 rounded "
                      >
                        +
                      </button>
                      <b>{cart[idx].cartQty}</b>
                      <button
                        className="mx-3 rounded"
                        onClick={() => handleOnReduce(item)}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <Button
                      className="w-100"
                      onClick={() => handleOnClick(item)}
                      variant="outline-primary"
                    >
                      "Add To Cart"
                    </Button>
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
