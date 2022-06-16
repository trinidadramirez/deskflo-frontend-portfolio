import React from 'react'
import { Table } from "react-bootstrap";

export const NewTicketsList = () => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Short Description</th>
                <th>Long Description</th>
                <th>Created Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>Can't log into laptop</th>
                <th>Laptop isn't accepting my username and password</th>
                <th>6/15/22</th>
            </tr>
        </tbody>
    </Table>
  )
}
