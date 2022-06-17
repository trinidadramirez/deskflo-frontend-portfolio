import React, {useState} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { Bread } from "../components/Breadcrumb";
import { CreateTicketForm } from '../components/CreateTicketForm';

const initFormData = {
    requestor: "",
    shortDescription: "",
    date: "",
    longDescription: "",
}
export const CreateTicketPage = () => {
    const [formData, setFormData] = useState(initFormData);

    const handleOnChange = e => {
        const {name, value} = e.target;
        console.log(name, value);

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
    }

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
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formData={formData}
                />
            </Col>
        </Row>
    </Container>
  )
}
