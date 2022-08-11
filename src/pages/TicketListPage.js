import React, { useEffect } from "react";
import { Bread } from "../components/Breadcrumb";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SearchForm } from "../components/SearchForm";
import { NewTicketsList } from "../components/NewTicketsList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTickets } from "./ticketsAction";

export const TicketListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <Bread page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="text-start">
            <Link to="/createTicket">
              <Button className="btn-primary btn-shadow">Add New Ticket</Button>
            </Link>
          </div>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <NewTicketsList />
        </Col>
      </Row>
    </Container>
  );
};
