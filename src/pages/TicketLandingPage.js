import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import { MsgHist } from "../components/MsgHist";
import { TicketReply } from "../components/TicketReply";
import { useParams } from "react-router-dom";
import {
  fetchSpecificTicket,
  resolveTicket,
  cancelTicket,
  reopenTicket,
  changeTicketPriority,
} from "./ticketsAction";
import { resetTicketLandingPageMsg } from "./ticketsSlice";

export const TicketLandingPage = () => {
  const dispatch = useDispatch();
  const { error, specificTicket, msgReplyError, replyMsg } = useSelector(
    (state) => state.tickets
  );

  const { ticketId } = useParams();

  useEffect(() => {
    dispatch(fetchSpecificTicket(ticketId));

    return () => {
      (msgReplyError || replyMsg) && dispatch(resetTicketLandingPageMsg());
    };
  }, [ticketId, dispatch, msgReplyError, replyMsg]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Bread page="Ticket" />
          </Col>
        </Row>
        <Row>
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          {msgReplyError && <Alert variant="danger">{msgReplyError}</Alert>}
          <Col className="text-end">
            <Row>
              <Button
                className="mb-2 btn-shadow"
                onClick={() => dispatch(resolveTicket(ticketId))}
                disabled={
                  specificTicket.status === "Resolved" ||
                  specificTicket.status === "Canceled"
                }
              >
                Resolve
              </Button>
            </Row>
            <Row>
              <Button
                className="mb-2 btn-shadow"
                onClick={() => dispatch(cancelTicket(ticketId))}
                disabled={
                  specificTicket.status === "Resolved" ||
                  specificTicket.status === "Canceled"
                }
              >
                Cancel
              </Button>
            </Row>
            <Row>
              <Button
                className="mb-3 btn-shadow"
                onClick={() => dispatch(reopenTicket(ticketId))}
              >
                Reopen
              </Button>
            </Row>
          </Col>
          <div className="text-black text-start jumbotron bg-deskflo-color-no-vh">
            <Col>
              ID: {ticketId}
              <div className="requestor">
                Requestor: {specificTicket.requestor}
              </div>
              <div className="requestor">
                Priority: {specificTicket.priority}
              </div>
              <Button
                className="m-2 btn-shadow"
                onClick={() => {
                  const priorityObj = {
                    priority: "1",
                  };
                  dispatch(changeTicketPriority(ticketId, priorityObj));
                }}
              >
                1
              </Button>
              <Button
                className="m-2 btn-shadow"
                onClick={() => {
                  const priorityObj = {
                    priority: "2",
                  };
                  dispatch(changeTicketPriority(ticketId, priorityObj));
                }}
              >
                2
              </Button>
              <Button
                className="m-2 btn-shadow"
                onClick={() => {
                  const priorityObj = {
                    priority: "3",
                  };
                  dispatch(changeTicketPriority(ticketId, priorityObj));
                }}
              >
                3
              </Button>
              <div className="shortDescription">
                Short Description: {specificTicket.shortDescription}
              </div>
              <div className="date">
                Created Date:{" "}
                {specificTicket.createdDate &&
                  new Date(specificTicket.createdDate).toLocaleString()}
              </div>
              <div className="status">Status: {specificTicket.status}</div>
            </Col>
          </div>
        </Row>
        <Row className="mt-3">
          <Col>
            {specificTicket.chat && <MsgHist msg={specificTicket.chat} />}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketReply _id={ticketId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
