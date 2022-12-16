import { getProducts, getSingleProduct } from "../../helper/axios";
import { setProducts, setSelectedProduct } from "./ProductSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const response = await getProducts();

  response.status === "success" && dispatch(setProducts(response.result));
};

export const fetchSingleProductAction = (_id) => async (dispatch) => {
  const response = await getSingleProduct(_id);

  response.status === "success" &&
    dispatch(setSelectedProduct(response.result));
};
