import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { NewTicketsList } from "../components/NewTicketsList";
import { Bread } from "../components/Breadcrumb";
import tickets from "../assets/test-tickets.json";

export const Home = () => {
  return (
    <Container>
    <Row>
        <Col>
            <Bread page="Home"/>
        </Col>
    </Row>
        <Row>
            <Col className="mt-2">
                <div>Unassigned Tickets: 10</div>
                <div>My Tickets: 5</div>
                <Button className="mt-2">
                    Create New Ticket
                </Button>
            </Col>
        </Row>

        <Row>
            <Col className="mt-2">New Tickets</Col>
        </Row>

        <Row>
            <Col className="mt-2">
                <NewTicketsList tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}
