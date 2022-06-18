import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const CreateTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
}) => {
  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label className="text-secondary">Requestor</Form.Label>
          <Form.Control
            name="requestor"
            value={formData.requestor}
            onChange={handleOnChange}
            placeholder="Enter requestor name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label className="text-secondary">Short Description</Form.Label>
          <Form.Control
            name="shortDescription"
            value={formData.shortDescription}
            maxLength="100"
            placeholder="Enter short description"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label className="text-secondary">Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label className="text-secondary">Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleOnChange}
            placeholder="Enter description"
            required
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button className="mb-3 btn-primary" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

CreateTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
