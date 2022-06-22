import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../src/deskflo-logo-white.png";
import "../../../src/deskFloColor.css";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const history = useHistory();

  const logOut = () => {
    history.push("/");
  }
  return (
    <Navbar className="navbar navbar-custom" collapseOnSelect expand="md">
      <Navbar.Brand>
        <img src={logo} width="110px" alt="DeskFlo Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/ticketList">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
