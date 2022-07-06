import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import { MsgHist } from "../components/MsgHist";
import { TicketReply } from "../components/TicketReply";
import { useParams } from "react-router-dom";
import { fetchSpecificTicket } from "./ticketsAction";

export const TicketLandingPage = () => {
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error, specificTicket } = useSelector(state => state.tickets)

  const { ticketId } = useParams();

  useEffect(() => {
    dispatch(fetchSpecificTicket(ticketId))
  }, [message, ticketId, dispatch]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Bread page="Ticket" />
          </Col>
        </Row>
        <Row>
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
            <Button>Resolve</Button>
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
