import { setMessage, setStatus } from "../../systemState/systemSlice";
import { getPaymentIntent } from "../../helper/axios";

export const postStripeAction = (cart) => async (dispatch) => {
  const response = await getPaymentIntent(cart);

  response.status === "success" &&
    dispatch(setStatus(response.status)) &&
    dispatch(setMessage(response.setMessage));
};
