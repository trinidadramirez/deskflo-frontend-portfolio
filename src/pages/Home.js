import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NewTicketsList } from "../components/NewTicketsList";
import { Bread } from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../pages/ticketsAction";

export const Home = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const totalTickets = tickets.length;
  const unassignedTickets = tickets.filter((row) => row.status !== "Resolved");

  return (
    <Container>
      <Row>
        <Col>
          <Bread page="Home" />
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <div className="text-start fw-bold text-secondary arial">
            Total Tickets: {totalTickets}
          </div>
          <div className="text-start fw-bold text-secondary arial">
            Open Tickets: {unassignedTickets.length}
          </div>
          <div className="text-end">
            <Link to="/createTicket">
              <Button className="mt-2 btn-shadow">Create New Ticket</Button>
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
