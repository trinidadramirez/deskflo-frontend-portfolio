import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./pages/ticketsSlice";
import loginReducer from "./pages/loginSlice";

const store = configureStore({
  reducer: {
    tickets: ticketListReducer,
    login: loginReducer,
  },
});

export default store;
