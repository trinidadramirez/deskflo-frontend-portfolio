import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSpecificTicketLoading,
  fetchSpecificTicketSuccess,
  fetchSpecificTicketFail,
  replyLoading,
  replySuccess,
  replyFail,
} from "./ticketsSlice.js";

import { getTickets, getSpecificTicket, updateReply } from "../api/ticketApi";

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterTickets = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export const fetchSpecificTicket = (_id) => async (dispatch) => {
  dispatch(fetchSpecificTicketLoading());

  try {
    const result = await getSpecificTicket(_id);

    dispatch(fetchSpecificTicketSuccess(result.data.result.length && result.data.result[0]));
  } catch (error) {
    dispatch(fetchSpecificTicketFail(error.message));
  }
};

// Fetch reply and display on ticket
export const fetchReply = (_id, msgObj) => async (dispatch) => {
  dispatch(replyLoading());

  try {
    const result = await updateReply(_id, msgObj);
    console.log(result);

    if (result.status === "error") {
      return dispatch(replyFail(result.message));
    }
    dispatch(fetchSpecificTicket(_id));
    dispatch(replySuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(replyFail(error.message));
  }
};
