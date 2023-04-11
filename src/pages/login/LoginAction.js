import { getUser } from "../../helper/axios";
import { setIsLoading } from "../../systemState/systemSlice";
import { setUser } from "../register/SignInUpSlice";
import { toast } from "react-toastify";

const fetchUserAction = (_id) => async (dispatch) => {};

export const loginUserAction = (user) => async (dispatch) => {
  dispatch(setIsLoading());
  const response = getUser(user);

  toast.promise(response, {
    pending: "Please Wait",
  });

  const data = await response;

  toast[data.status](data.message);
  data.status === "success" && dispatch(setUser(data.user));

  dispatch(setIsLoading());
};
