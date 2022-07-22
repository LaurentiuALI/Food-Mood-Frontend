import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { AuthTemplate } from "../../common/templates/AuthTemplate";

export const Welcome = () => {
  return (
    <AuthTemplate>
      <h1 className="welcome__title">FOOD MOOD</h1>
      <h3 className="welcome__subtitle">DIFFERENT DELICIOUS SIMPLE</h3>
      <p className="welcome__description">
        Trying to find your taste? <br /> Sign Up and let’s go on a delicious
        journey!
      </p>
      <div className="welcome__buttons-container">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </AuthTemplate>
  );
};
