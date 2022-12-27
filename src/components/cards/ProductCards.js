import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToCart } from "../../pages/cart/CartSlice";
import { setSelectedProduct } from "../../pages/products/ProductSlice";

export const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const displayRow = Math.ceil(products.length / 4);

  const handleOnProductDesc = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const handleOnClick = (item) => {
    dispatch(setToCart(item));
  };
  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-4 mb-4">
      {products.map((item, idx) => (
        <Col>
          <Card>
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
                <div>
                  <Button
                    className=""
                    variant="outline-primary"
                    onClick={() => handleOnClick(item)}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
