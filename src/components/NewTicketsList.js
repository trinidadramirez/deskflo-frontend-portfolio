import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NewTicketsList = () => {
  const { searchTicketList, isLoading, error } = useSelector((state) => state.tickets);
  // const currentDate = Date.now();

  if (isLoading) return <h3>Loading tickets...</h3>;
  if (error) return <h3>{error}</h3>
  return (
    <Table className="table table-sm" striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Priority</th>
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
              <td>{row.priority}</td>
              <td>{row.status}</td>
              <td>{row.requestor}</td>
              <td>{row.shortDescription}</td>
              <td>{row.description}</td>
              <td>{row.createdDate && new Date(row.createdDate).toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              No results
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
