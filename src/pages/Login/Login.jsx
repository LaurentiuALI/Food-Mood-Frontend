import React, { useState, useEffect } from "react";
import { AuthTemplate } from "../../common/templates/AuthTemplate";
import "./Login.css";
import {
  UserOutlined,
  MailOutlined,
  UnlockOutlined,
  LeftOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  BorderOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Layout, Input, Checkbox, Form, Button, Typography } from "antd";
const { Title, Text } = Typography;

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

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        SubmitEvent;
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <AuthTemplate>
      <Layout>
        <Header>
          <LeftOutlined style={{ color: "#5F7D63" }} />
          <Title className="header__title">LOG IN</Title>
        </Header>

        <Content className="content-container">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
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
                prefix={
                  <LockOutlined
                    style={{ color: "#A59591" }}
                    className="password-icon"
                  />
                }
                type="password"
                placeholder="Password"
                suffix={(visible) =>
                  visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                }
              />
            </Form.Item>

            <Form.Item className="login-options-container">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to={"/forgot-password"}>
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                onClick={onLogin}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Content>

        <Footer className="login-page-footer">
          <Text>You don't have an account yet?</Text>{" "}
          <Link to={"/register"}>Sign up!</Link>
        </Footer>
      </Layout>
    </AuthTemplate>
  );
};
