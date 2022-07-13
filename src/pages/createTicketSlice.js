import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  success: "",
};

const createTicketSlice = createSlice({
  name: "createTicket",
  initialState,
  reducers: {
    createTicketPending: (state) => {
      state.isLoading = true;
    },
    createTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    createTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createTicketPending,
  createTicketSuccess,
  createTicketFail,
} = createTicketSlice.actions

export default createTicketSlice.reducer
