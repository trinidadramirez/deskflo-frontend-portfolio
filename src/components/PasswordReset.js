import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../deskFloColor.css";
import "./LoginForm.css";
import logo from "../deskflo-logo.png";

export const PasswordReset = ({ handleOnChange, handleOnSubmit, changeForm, email }) => {
  return (
    <Container className="bg-light">
      <Row>
        <Col>
          <img src={logo} width="50%" alt="DeskFlo Logo" />
          <h1 className="text-secondary">Reset Password</h1>
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
            <Button className="mb-3 btn-primary" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="text-secondary" href="#!" onClick={() => changeForm("Login")}>
            Return To Login
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};