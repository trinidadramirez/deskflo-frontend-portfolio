import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
};

const newTicketsListSlice = createSlice({
  name: "ticketsList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, action) => {
      state.searchTicketList = state.tickets.filter(row => {
        if (!action.payload) return row
        return row.shortDescription.toLowerCase().includes(action.payload.toLowerCase());
      })
    }
  },
});

const { reducer, actions } = newTicketsListSlice;

export const { 
  fetchTicketLoading, 
  fetchTicketSuccess, 
  fetchTicketFail ,
  searchTickets,
} = actions;

export default reducer;
