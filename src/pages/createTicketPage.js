import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import { CreateTicketForm } from '../components/CreateTicketForm';

export const CreateTicketPage = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Bread page="Create New Ticket"/>
            </Col>
        </Row>

        <Row>
            <Col>
                <CreateTicketForm 
                />
            </Col>
        </Row>
    </Container>
  )
}
