import React from "react";
import { Button, Carousel, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../../pages/cart/CartSlice";

export const ProductInformation = () => {
  const { selectedProduct } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { images } = selectedProduct;
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setToCart(selectedProduct));
  };

  return (
    <div className="mt-3">
      {" "}
      <Table striped="columns">
        <thead>
          <tr>
            <th className="w-50">
              <Carousel className="p-5 text-center">
                {images?.map((item, i) => (
                  <Carousel.Item className="">
                    <img
                      crossOrigin="anonymous"
                      className="d-block w-100"
                      src={
                        process.env.REACT_APP_IMAGE_SERVER_URL + item.substr(6)
                      }
                      style={{
                        minWidth: "100px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </th>
            <th colSpan={2} className="d-inline-block">
              <h5>{selectedProduct.name}</h5> <br />
              <h6 className="text-danger">
                {selectedProduct.salesPrice > 0
                  ? `$${selectedProduct.salesPrice} from $${selectedProduct.price}`
                  : `$${selectedProduct.price}`}
              </h6>
              <h5>Description</h5>
              <p>{selectedProduct.description}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="text-center">
              <i className="fa-solid fa-star"></i> {selectedProduct.ratings}
            </td>
            <td>
              <Form className="d-flex justify-content-between">
                <Form.Label>Enter Qty</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Qty"
                  defaultValue={0}
                  className="m-1"
                />

                <Button variant="primary" type="submit">
                  Add To Cart
                </Button>
              </Form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
