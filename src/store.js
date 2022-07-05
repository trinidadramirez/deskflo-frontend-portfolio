import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./pages/ticketsSlice";
import loginReducer from "./pages/loginSlice";
import userReducer from "./pages/userSlice";

const store = configureStore({
  reducer: {
    tickets: ticketListReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
