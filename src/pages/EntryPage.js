import React, { useState } from "react";
import "./entryPage.css";
import { LoginForm } from "../components/LoginForm";
import { PasswordReset } from "../components/PasswordReset";

export const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("Login");

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

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const changeForm = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page">
      {formLoad === "Login" && (
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          changeForm={changeForm}
          email={email}
          password={password}
        />
      )}

      {formLoad === "Reset" && (
        <PasswordReset
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          changeForm={changeForm}
          email={email}
        />
      )}
    </div>
  );
};
