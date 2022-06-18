import React, {useState, useEffect} from 'react'
import { Bread } from "../components/Breadcrumb";
import {Container, Row, Col, Button} from "react-bootstrap"
import { SearchForm } from '../components/SearchForm';
import { NewTicketsList } from '../components/NewTicketsList';
import tickets from "../assets/test-tickets.json"

export const TicketListPage = () => {
    const [str, setStr] = useState("")
    const [dispTickets, setDispTickets] = useState(tickets);

    useEffect(() => {
    }, [str, dispTickets]);

    const handleOnChange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicketList(value);
    }

    const searchTicketList = (s) => {
        const displayTickets = tickets.filter(row => row.shortDescription.toLowerCase().includes(s.toLowerCase()));
        setDispTickets(displayTickets);
    }

  return (
    <Container>
        <Row>
            <Col>
                <Bread page="Ticket List"/>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <Button className="btn-primary">Add New Ticket</Button>
            </Col>
            <Col className="text-right">
                <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <NewTicketsList tickets={dispTickets}/>
            </Col>
        </Row>
    </Container>
  )
}


