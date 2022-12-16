import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../pages/products/ProductSlice";

export const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const displayRow = Math.ceil(products.length / 4);

  const handleOnProductDesc = (product) => {
    dispatch(setSelectedProduct(product));
  };
  return (
    <Row xs={1} md={4} className="g-4 mt-4 mb-4">
      {products.map((item, idx) => (
        <Col>
          <Card>
            <Card.Img
              crossOrigin="anonymous"
              variant="top"
              src={
                process.env.REACT_APP_IMAGE_SERVER_URL +
                item.thumbnail.substr(6)
              }
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/product/${item._id}`}>
                  <Button
                    variant="primary"
                    onClick={() => handleOnProductDesc(item)}
                  >
                    {item.name}
                  </Button>
                </Link>
              </Card.Title>
              <Card.Text>
                {item.salesPrice > 0
                  ? `On Sale for only $${item.salesPrice} from $${item.price}`
                  : `$${item.price}`}{" "}
                <br />
                <div>
                  <Button className="" variant="outline-primary">
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
