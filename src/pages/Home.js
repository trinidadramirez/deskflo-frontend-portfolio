import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NewTicketsList } from "../components/NewTicketsList";
import { Bread } from "../components/Breadcrumb";
import tickets from "../assets/test-tickets.json";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Bread page="Home" />
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <div className="text-start fw-bold text-secondary">
            Unassigned Tickets: 10
          </div>
          <div className="text-start fw-bold text-secondary">My Tickets: 5</div>
          <div className="text-end">
            <Link to="/createTicket">
              <Button className="mt-2">Create New Ticket</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <div className="text-start">
        <Row>
          <Col className="mt-2">New Tickets</Col>
        </Row>
      </div>

      <Row>
        <Col className="mt-2">
          <NewTicketsList tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
