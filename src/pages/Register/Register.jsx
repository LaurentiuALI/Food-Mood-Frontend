import {
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Register.less";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
import axios from "axios";

const { Title } = Typography;

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onRegister = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:3000"
        }/auth/register`,
        {
          name: name,
          email: email,
          phoneNumber: phone,
          password: password,
          passwordConfirmation: passwordConfirmation,
        }
      )
      .then((response) => {
        setErrors({});
        console.log("Success ✅");
        console.log(response);

        onLogin(response.data.email, password).then((response) => {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          // 👇️ redirect to /preferences
          navigate("/preferences", { replace: true });
        });
      })
      .catch(function (error) {
        if (error.response) {
          setErrors(error.response.data.message);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const onLogin = async (email, password) => {
    const user = { email, password };
    return await axios.post(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/auth/login`,
      {
        email,
        password,
      }
    );
  };

  // // test without create a new user
  // const onRegister = (data) => {
  //   console.log("✅ Success:", data);
  //   // 👇️ redirect to /preferences
  //   // navigate("/preferences");
  //   navigate("/preferences", { replace: false });
  //   console.log("✅ Success:", navigate);
  //   // 👇️ clearing input values after submit
  //   // form.resetFields();
  // };

  // const onRegister = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  // const onRegisterFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const [form] = Form.useForm();

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header">
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
              SIGN UP
            </Title>
            <div className="main-layout-header-right">&nbsp;</div>
          </Header>
          <Content
            className="main-layout-content"
            style={{ textAlign: "left" }}
          >
            <Form
              form={form}
              name="register"
              // onFinish={onRegister}
              // onFinishFailed={onRegisterFailed}
              // autoComplete="off"
              scrollToFirstError
            >
              <Form.Item
                name="name"
                value={name}
                validateStatus={
                  errors.hasOwnProperty("name") ? "error" : "validating"
                }
                help={errors.hasOwnProperty("name") ? errors.name : null}
                onChange={(e) => {
                  setName(e.target.value);
                  delete errors.name;
                }}
              >
                <Input prefix={<UserOutlined />} placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="email"
                value={email}
                validateStatus={
                  errors.hasOwnProperty("email") ? "error" : "validating"
                }
                help={errors.hasOwnProperty("email") ? errors.email : null}
                onChange={(e) => {
                  setEmail(e.target.value);
                  delete errors.email;
                }}
              >
                <Input
                  prefix={<MailOutlined className="form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                value={phone}
                validateStatus={
                  errors.hasOwnProperty("phoneNumber") ? "error" : "validating"
                }
                help={
                  errors.hasOwnProperty("phoneNumber")
                    ? errors.phoneNumber
                    : null
                }
                onChange={(e) => {
                  setPhone(e.target.value);
                  delete errors.phoneNumber;
                }}
              >
                <Input
                  className="form-item-icon"
                  maxLength={10}
                  prefix={<PhoneOutlined className="form-item-icon" />}
                  placeholder="Phone Number"
                />
              </Form.Item>

              <Form.Item
                name="password"
                value={password}
                validateStatus={
                  errors.hasOwnProperty("password") ? "error" : "validating"
                }
                help={
                  errors.hasOwnProperty("password") ? errors.password : null
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                  delete errors.password;
                }}
              >
                <Input.Password
                  prefix={<LockOutlined className="form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="passwordConfirmation"
                value={passwordConfirmation}
                validateStatus={
                  errors.hasOwnProperty("passwordConfirmation")
                    ? "error"
                    : "validating"
                }
                help={
                  errors.hasOwnProperty("passwordConfirmation")
                    ? errors.passwordConfirmation
                    : null
                }
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                  delete errors.passwordConfirmation;
                }}
              >
                <Input.Password
                  prefix={<LockOutlined className="form-item-icon" />}
                  placeholder="Confirm password"
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: "0rem" }}>
                <div className="register-button-container">
                  <Button
                    type="primary"
                    // htmlType="submit"
                    onClick={onRegister}
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      width: "7.5rem",
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Content>
          <Footer className="main-layout-footer">
            <div>Already registred?</div>
            <Link to="/login">Log In</Link>
          </Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default Register;
