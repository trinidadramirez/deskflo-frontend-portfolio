import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../src/deskflo-logo-white.png"
import "../../../src/deskFloColor.css"

export const Header = () => {
  return (
  <Navbar className="navbar navbar-custom" collapseOnSelect expand="md">
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
