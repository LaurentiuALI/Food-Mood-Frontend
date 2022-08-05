import React, { useState, useEffect } from "react";
import "./Login.less";
import {
  MailOutlined,
  LeftOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Layout, Input, Checkbox, Form, Button, Typography } from "antd";
const { Title, Text } = Typography;
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const keepUserLoggedIn = () => {
    setIsChecked((prevState) => !prevState);
  };

  const onLogin = () => {
    const user = { email, password };

    axios
      .post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log("Success");
        setErrors({});
        console.log(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        if (isChecked) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setUser(response.data);
        }
        navigate("/preferences", { replace: true });
      })
      .catch((e) => {
        setErrors(e.response.data.message)
        console.log("am prins eroarea: \n", e.response.data)
      });
  };

  useEffect(() => {
    const localLoggedInUser = localStorage.getItem("user");
    const sessionLoggedInUser = sessionStorage.getItem("user");

    if (localLoggedInUser || sessionLoggedInUser) {
      const foundUser = JSON.parse(localLoggedInUser);
      setUser(foundUser);
      navigate("/home", { replace: true });
      console.log(foundUser);
    }
  }, [isChecked]);

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header" style={{ color: "none" }}>
            <div className="main-layout-header-left">
              <Link to="/">
                <LeftOutlined
                  style={{
                    color: "#5F7D63",
                    stroke: "#5F7D63",
                    strokeWidth: "100",
                  }}
                />
              </Link>
            </div>
            <Title
              level={3}
              style={{
                fontFamily: "Georama",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              LOG IN
            </Title>
            <div className="main-layout-header-right">&nbsp;</div>
          </Header>

          <Content
            className="main-layout-content login-content"
            style={{ textAlign: "left" }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                value={email}
                validateStatus={errors.hasOwnProperty("email")|| errors ? "error" : "validating"}
                help={errors.hasOwnProperty("email") ? errors.email : null}
                onChange={(e) => {
                  setEmail(e.target.value)
                  delete errors.email;
                }}
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
                value={password}
                validateStatus={errors.hasOwnProperty("password") ? "error" : "validating"}
                help={errors.hasOwnProperty("password") ? errors.password : null}
                onChange={(e) => {
                  setPassword(e.target.value)
                  delete errors.password;
                }}
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

              <Form.Item>
                <div className="login-options-container">
                  <Form.Item name="remember" noStyle>
                    <Checkbox checked={isChecked} onChange={keepUserLoggedIn}>
                      Keep me signed in
                    </Checkbox>
                  </Form.Item>

                  <Link className="login-form-forgot" to={"/forgot-password"}>
                    Trouble logging in?
                  </Link>
                </div>
              </Form.Item>


              <Form.Item style={{ marginBottom: "0rem" }}>
                <div className="login-button-container">
                  <Button
                    type="primary"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      width: "7.5rem",
                      height: "1.875rem",
                    }}
                    onClick={onLogin}
                  >
                    Log in
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Content>

          <Footer className="main-layout-footer">
            <div>You don't have an account yet?</div>
            <Link to="/register">Sign up!</Link>
          </Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default Login;
