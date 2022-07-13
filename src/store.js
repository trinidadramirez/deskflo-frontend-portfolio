import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./pages/ticketsSlice";
import loginReducer from "./pages/loginSlice";
import userReducer from "./pages/userSlice";
import createTicketReducer from "./pages/createTicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketListReducer,
    login: loginReducer,
    user: userReducer,
    createTicket: createTicketReducer,
  },
});

export default store;
