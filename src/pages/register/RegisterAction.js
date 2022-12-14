import { postUser } from "../../helper/axios";
import { setMessage, setStatus, setToast } from "../../systemState/systemSlice";
import { setUser } from "./SignInUpSlice";

export const registerUserAction = (user) => async (dispatch) => {
  const response = await postUser(user);
  console.log(response);

  dispatch(setStatus(response.status));
  dispatch(setMessage(response.message));
  dispatch(setToast());
};
