import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: false,
  status: "",
  message: "",
};

const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    setToast: (state) => {
      state.showToast = !state.showToast;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setToast, setStatus, setMessage } = actions;

export default reducer;
