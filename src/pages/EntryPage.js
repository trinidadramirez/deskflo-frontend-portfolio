import React, { useState } from "react";
import "./entryPage.css";
import { LoginForm } from "../components/LoginForm";
import { PasswordReset } from "../components/PasswordReset";

export const EntryPage = () => {
  const [formLoad, setFormLoad] = useState("Login");

  const changeForm = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page jumbotron jumbotron-width">
      {formLoad === "Login" && (
        <LoginForm
          changeForm={changeForm}
        />
      )}

      {formLoad === "Reset" && (
        <PasswordReset
          changeForm={changeForm}
        />
      )}
    </div>
  );
};
