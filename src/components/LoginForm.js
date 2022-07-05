import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import PropTypes from "prop-types";
import "../deskFloColor.css";
import "./LoginForm.css";
import logo from "../deskflo-logo.png";
import { loginAwaiting, loginSuccess, loginFail } from "../pages/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../api/userApi";
import { useHistory } from "react-router-dom";
import { getUserAccount } from "../pages/userAction";

export const LoginForm = ({ changeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const hist = useHistory();
  const { isLoading, isAuthorized, error } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    sessionStorage.getItem("accessToken") && hist.push("/home")
  }, [hist, isAuthorized]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAwaiting());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserAccount());
      hist.push("/home");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container className="bg-light">
      <Row>
        <Col>
          <img src={logo} width="50%" alt="DeskFlo Logo" />
          <h1 className="text-secondary fs-3">Admin Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <div className="text-start">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Label className="text-secondary">
                  Email Address
                </Form.Label>
              </div>
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
              <div className="text-start">
                <Form.Label className="text-secondary">Password</Form.Label>
              </div>
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
          <a
            className="text-secondary"
            href="#!"
            onClick={() => changeForm("Reset")}
          >
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  changeForm: PropTypes.func.isRequired,
};
