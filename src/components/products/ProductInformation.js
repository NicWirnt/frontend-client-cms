import React from "react";
import { Button, Carousel, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../../pages/cart/CartSlice";

export const ProductInformation = () => {
  const { selectedProduct } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { images } = selectedProduct;
  const dispatch = useDispatch();

  const handleOnClick = () => {
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
                {images.map((item, i) => (
                  <Carousel.Item className="">
                    <img
                      crossOrigin="anonymous"
                      className="d-block w-100"
                      src={
                        process.env.REACT_APP_IMAGE_SERVER_URL + item.substr(6)
                      }
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </th>
            <th colSpan={2} className="d-inline-block">
              <h5>{selectedProduct.name}</h5> <br />
              <p>
                {selectedProduct.salesPrice > 0
                  ? `$${selectedProduct.salesPrice} from $${selectedProduct.price}`
                  : `$${selectedProduct.price}`}
              </p>
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
              <Form.Control type="number" placeholder="Input Qty" />
            </td>
            <td className="">
              <Button
                onClick={handleOnClick}
                style={{
                  borderRadius: "10px",
                }}
              >
                Add to Cart
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
