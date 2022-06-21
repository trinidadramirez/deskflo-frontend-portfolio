import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const TicketReply = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <div className="text-start">
        <Form.Label>Reply</Form.Label>
      </div>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-end mt-3">
        <Button type="submit">Reply</Button>
      </div>
    </Form>
  );
};

TicketReply.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
