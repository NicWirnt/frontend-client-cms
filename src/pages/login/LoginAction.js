import { getUser } from "../../helper/axios";
import { setMessage, setStatus, setToast } from "../../systemState/systemSlice";
import { setUser } from "../register/SignInUpSlice";

const fetchUserAction = (_id) => async (dispatch) => {};

export const loginUserAction = (user) => async (dispatch) => {
  const response = await getUser(user);

  console.log(response);

  response.status === "success" && dispatch(setUser(response.user));
  dispatch(setStatus(response.status));
  dispatch(setMessage(response.message));
  dispatch(setToast());
};
