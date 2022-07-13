import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import { MsgHist } from "../components/MsgHist";
import { TicketReply } from "../components/TicketReply";
import { useParams } from "react-router-dom";
import { fetchSpecificTicket, resolveTicket, cancelTicket, reopenTicket } from "./ticketsAction";

export const TicketLandingPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, specificTicket, msgReplyError, replyMsg } = useSelector(state => state.tickets)

  const { ticketId } = useParams();

  useEffect(() => {
    dispatch(fetchSpecificTicket(ticketId))
  }, [ticketId, dispatch]);

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
        {msgReplyError && (<Alert variant="danger">{msgReplyError}</Alert>)}
          <Col className="fw-bolder text-secondary text-start">
            ID: {ticketId}
            <div className="requestor">
              Requestor: {specificTicket.requestor}
            </div>
            <div className="shortDescription">
              Short Description: {specificTicket.shortDescription}
            </div>
            <div className="date">Created Date: {specificTicket.createdDate && new Date(specificTicket.createdDate).toLocaleString()}</div>
            <div className="status">Status: {specificTicket.status}</div>
          </Col>
          <Col className="text-end">
            <Row>
              <Button 
                className="mb-2" 
                onClick={() => dispatch(resolveTicket(ticketId))}
                disabled = {specificTicket.status === "Resolved" || specificTicket.status === "Canceled"}
              >Resolve</Button>
            </Row>
            <Row>
              <Button 
                className="mb-2" 
                onClick={() => dispatch(cancelTicket(ticketId))}
                disabled = {specificTicket.status === "Resolved" || specificTicket.status === "Canceled"}
              >Cancel</Button>
            </Row>
            <Row>
              <Button onClick={() => dispatch(reopenTicket(ticketId))}>Reopen</Button>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>{specificTicket.chat && <MsgHist msg={specificTicket.chat} />}</Col>
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
