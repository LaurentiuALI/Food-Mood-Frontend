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
import "./Register.css";
import "antd/dist/antd.css";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
// import axios from "axios";

const { Title } = Typography;

// const formItemLayout = {
//   // labelCol: {
//   //   xs: {
//   //     span: 24,
//   //   },
//   //   sm: {
//   //     span: 8,
//   //   },
//   // },
//   wrapperCol: {
//     xs: {
//       span: 0,
//     },
//     sm: {
//       span: 0,
//     },
//   },
// };

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  // const onRegister = () => {
  //   axios
  //     .post("http://localhost:3000/auth/register", {
  //       name: name,
  //       email: email,
  //       phoneNumber: phone,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log("Success");
  //       console.log(response.data);
  //       // 👇️ redirect to /preferences
  //       navigate('/preferences');
  //     })
  //     .catch((e) => {
  //       console.log("Error");
  //       console.log(e);
  //     });
  // };

  // test without create a new user
  const onRegister = (data) => {
    console.log(data);
    // 👇️ redirect to /preferences
    navigate("/preferences");
  };

  const [form] = Form.useForm();

  // const onRegister = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header">
            <div className="main-layout-header-left">
              <Link to="/">
                <LeftOutlined />
              </Link>
            </div>
            <Title level={4}>SIGN UP</Title>
            <div className="main-layout-header-right"></div>
          </Header>
          <Content className="main-layout-content">
            <Form
              // {...formItemLayout}
              form={form}
              name="register"
              onFinish={onRegister}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter a name.",
                    // whitespace: true,
                  },
                ]}
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <Input prefix={<UserOutlined />} placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message:
                      "Please enter a valid email address. / This email is already registered.",
                  },
                  {
                    required: true,
                    message: "Please input your email.",
                  },
                ]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
                <Input
                  prefix={<MailOutlined className="form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter enter a valid phone number.",
                  },
                ]}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                rules={[
                  {
                    min: 6,
                    max: 16,
                    message:
                      "Your password must be between 6 - 16 characters long.",
                  },
                  {
                    required: true,
                    message: "Please enter your password.",
                  },
                ]}
                // hasFeedback
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Input.Password
                  prefix={<LockOutlined className="form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                // hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password.",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "This does not match the password entered above."
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="form-item-icon" />}
                  placeholder="Confirm password"
                />
              </Form.Item>

              {/* <Form.Item {...tailFormItemLayout}> */}
              <Form.Item>
                <div className="register-button-container">
                  <Button type="primary" htmlType="submit">
                    Next
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Content>
          <Footer className="main-layout-footer">
            <div>
              Already registred?
              <Link to="/login">Log In</Link>
            </div>
          </Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default Register;
