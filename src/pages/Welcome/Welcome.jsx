import React from "react";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-form">
          <h1 className="auth-form__title">FOOD MOOD</h1>
          <h3 className="auth-form__subtitle">DIFFERENT DELICIOUS SIMPLE</h3>
          <p className="auth-form__description">
            Trying to find your taste? <br/> Sign Up and let’s go on a delicious
            journey!
          </p>
          <div className="auth-form__buttons-container">
            <a href="/register">Sign Up</a>
            <a href="/login">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};
