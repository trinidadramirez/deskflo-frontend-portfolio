import axios from "axios";

import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
} from "./ticketsSlice.js";

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQGNvbXBhbnkuY29tIiwiaWF0IjoxNjU2NjQ3MDI4LCJleHAiOjE2NTY3MzM0Mjh9.4sGbNNyZ4YU70OwoG_jjQtOZqQSACGK4i2x1sWnWVQw",
      },
    });
    console.log(result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterTickets = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
