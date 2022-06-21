import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import tickets from "../assets/test-tickets.json";
import { MsgHist } from "../components/MsgHist";
import { TicketReply } from "../components/TicketReply";

const ticket = tickets[0];

export const TicketLandingPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Message submitted!");
  };

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
            <div className="shortDescription">
              Short Description: {ticket.shortDescription}
            </div>
            <div className="date">Created Date: {ticket.date}</div>
            <div className="status">Status: {ticket.status}</div>
          </Col>
          <Col className="text-end">
            <Button>Resolve</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <MsgHist msg={ticket.history} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketReply
              msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
