import { getCategories } from "../../helper/axios";
import { setCategories } from "./categorySlice";

export const fetchCatAction = () => async (dispatch) => {
  const response = await getCategories();

  response.status === "success" && dispatch(setCategories(response.result));
};

export const fetchProductByCat = (_id) => async (dispatch) => {};
