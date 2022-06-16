import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../src/deskflo-logo.png"

export const Header = () => {
  return (
  <Navbar collapseOnSelect bg="light" expand="md">
    <Navbar.Brand>
        <img src={logo} width="110px" alt="DeskFlo Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Home">Tickets</Nav.Link>
            <Nav.Link href="/Home">Logout</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  )}
