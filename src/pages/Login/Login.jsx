import React, { useState, useEffect } from "react";
import "./Login.css";
import {
  MailOutlined,
  LeftOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Layout, Input, Checkbox, Form, Button, Typography } from "antd";
const { Title, Text } = Typography;
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const keepUserLoggedIn = () => {
    setIsChecked((prevState) => !prevState);
  };

  const onLogin = () => {
    const user = { email, password };

    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("Success");
        console.log(response.data);
        if (isChecked) {
          console.log("Keep the user logged");
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      })
      .catch((e) => {
        console.log("Error");
        console.log(e);
      });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
    // TO-DO -> Navigate to another page if you have a token
  }, []);

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout>
          <Header>
            <Link to={"/"}>
              {" "}
              <LeftOutlined
                className="back-icon"
                style={{ color: "#5F7D63" }}
              />
            </Link>
            <Title className="header__title">LOG IN</Title>
            <div></div>
          </Header>

          <Content className="content-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="Email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  className="email"
                  prefix={
                    <MailOutlined
                      className="email-icon"
                      style={{ color: "#A59591" }}
                    />
                  }
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  className="password"
                  onChange={(e) => setPassword(e.target.value)}
                  prefix={
                    <LockOutlined
                      style={{ color: "#A59591" }}
                      className="password-icon"
                    />
                  }
                  type="password"
                  placeholder="Password"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onLogin();
                  }}
                  iconRender={(visible) =>
                    visible ? (
                      <EyeInvisibleOutlined
                        className="password-icon-suffix"
                        twoToneColor="#A59591"
                      />
                    ) : (
                      <EyeOutlined
                        twoToneColor="#A59591"
                        className="password-icon"
                      />
                    )
                  }
                />
              </Form.Item>

              <Form.Item className="login-options-container">
                <Form.Item name="remember" noStyle>
                  <Checkbox checked={isChecked} onChange={keepUserLoggedIn}>
                    Remember me
                  </Checkbox>
                </Form.Item>

                <Link className="login-form-forgot" to={"/forgot-password"}>
                  Trouble logging in?
                </Link>
              </Form.Item>
              <div className="submit-button-div">
                <Form.Item>
                  <Button
                    type="primary"
                    className="login-button"
                    onClick={onLogin}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Content>

          <Footer className="login-page-footer">
            <Text>You don't have an account yet?</Text>{" "}
            <div className="sign-up-link">
              <Link to={"/register"}>Sign up!</Link>
            </div>
          </Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};
