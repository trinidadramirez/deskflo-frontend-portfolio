import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./pages/ticketsSlice";

const store = configureStore({
  reducer: {
    tickets: ticketListReducer,
  },
});

export default store;
