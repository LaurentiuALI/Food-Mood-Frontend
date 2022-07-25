import React, { useState } from "react";
import { AuthTemplate } from "../../common/templates/AuthTemplate";
import "./Login.css";
import { MailOutlined, UnlockOutlined, LeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onLogin2 = async () => {
  //   const reponse = await axios.post("http://localhost:3000/auth/login", {
  //     email: email,
  //     password: password,
  //   });

  //   console.log(reponse.data);
  // };

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
      <header>
        <LeftOutlined style={{ color: "#5F7D63" }} />
        <h1 className="login-title">Login</h1>
      </header>
      <div className="login-field">
        <MailOutlined style={{ color: "#A59591" }} />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login-field">
        <UnlockOutlined style={{ color: "#A59591" }} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-options-container">
        <div className="logged-container">
          <input type="checkbox" />
          <p>Keep me signed in</p>
        </div>
        <Link to="/recovery">Trouble logging in?</Link>
      </div>
      <footer className="login-page-footer">
        <div className="login-button-container">
          <button className="login-button" onClick={onLogin}>
            Log In
          </button>
          <p>
            You don't have an account yet? {<Link to="/register">Sign Up</Link>}
          </p>
        </div>
      </footer>
    </AuthTemplate>
  );
};
