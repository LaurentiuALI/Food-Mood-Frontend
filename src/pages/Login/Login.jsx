import React, { useState } from "react";
import { AuthTemplate } from "../../common/templates/AuthTemplate";
import "./Login.css";
import { MailOutlined, UnlockOutlined, LeftOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    axios
      .post("http://localhost:3000/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Success");
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Error");
        console.log(e);
      });
  };

  return (
    <AuthTemplate>
      <header className="header">
        <LeftOutlined style={{ color: "#5F7D63" }} />
        <h1 className="header__title">Login</h1>
      </header>



      <main className="main">
        <div className="email">
          <MailOutlined className="email-icon" style={{ color: "#A59591" }} />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
      <div className="password">
        <UnlockOutlined style={{ color: "#A59591"}} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <EyeOutlined className="password-icon" style={{ color: "#A59591"}}/>
      </div>
      <div className="login-options-container">
        <div className="logged-container">
          <input type="checkbox" className="logged-checkbox"/>
          <p>Keep me signed in</p>
        </div>
        <Link to="/recovery">Trouble logging in?</Link>
      </div>
      <button className="login-button" onClick={onLogin}>
        Log In
      </button>
      </main>


      <footer className="login-page-footer">
        <div className="login-button-container">
          <p>
            You don't have an account yet? {<Link to="/register">Sign Up</Link>}
          </p>
        </div>
      </footer>
    </AuthTemplate>
  );
};
