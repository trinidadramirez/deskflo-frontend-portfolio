import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReply } from "../pages/ticketsAction";
import PropTypes from "prop-types";

export const ResolutionDetails = ({ _id }) => {
  const dispatch = useDispatch();

  const {
    user: { name },
  } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: name,
    };

    dispatch(fetchReply(_id, msgObj));
    setMessage("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <div className="text-start">
          <Form.Label>Resolution Details</Form.Label>
        </div>
        <Form.Control
          as="textarea"
          row="5"
          name="detail"
          value={message}
          onChange={handleOnChange}
        />
        <div className="text-end mt-3">
          <Button className="btn-shadow" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

ResolutionDetails.propTypes = {
  _id: PropTypes.string.isRequired,
};
