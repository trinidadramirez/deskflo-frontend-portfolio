import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../deskFloColor.css";
import "./LoginForm.css";
import logo from "../deskflo-logo.png";

export const LoginForm = ({ handleOnChange, handleOnSubmit, changeForm, email, password }) => {
  return (
    <Container className="bg-light">
      <Row>
        <Col>
          <img src={logo} width="50%" alt="DeskFlo Logo" />
          <h1 className="text-secondary">Admin Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Button className="mb-3 btn-primary" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="text-secondary" href="#!" onClick={() => changeForm("Reset")}>
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};