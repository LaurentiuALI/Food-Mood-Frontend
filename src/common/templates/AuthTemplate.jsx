import React from "react";
import "./AuthTemplate.css"

export const AuthTemplate = (props) => {
  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-form">{props.children}</div>
      </div>
    </div>
  );
};
