import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: false,
  status: "",
  message: "",
  showModal: false,
  isLoading: false,
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
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setToast, setStatus, setMessage, setIsLoading } = actions;

export default reducer;
