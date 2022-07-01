import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NewTicketsList = () => {
  const { searchTicketList, isLoading, error } = useSelector((state) => state.tickets);

  if (isLoading) return <h3>Loading tickets...</h3>;
  if (error) return <h3>{error}</h3>
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
        {searchTicketList.length ? (
          searchTicketList.map((row) => (
            <tr key={row._id}>
              <td>
                <Link to={`/ticket/${row._id}`}>{row._id}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.requestor}</td>
              <td>{row.shortDescription}</td>
              <td>{row.description}</td>
              <td>{row.createdDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center">
              No results
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
