import React from "react";
import { Table } from "react-bootstrap";
import tickets from "../assets/test-tickets.json";
import PropTypes from "prop-types";

export const NewTicketsList = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Requestor</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.status}</td>
              <td>{row.requestor}</td>
              <td>{row.shortDescription}</td>
              <td>{row.longDescription}</td>
              <td>{row.date}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td  colSpan="6" className="text-center">No results</td>
          </tr>
          )}
      </tbody>
    </Table>
  );
};

NewTicketsList.propTypes = {
    tickets: PropTypes.array.isRequired,
}
