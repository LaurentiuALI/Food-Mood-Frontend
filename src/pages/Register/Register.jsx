import {
    LeftOutlined,
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Button, Form, Input, Layout } from "antd";
  import { Content, Footer, Header } from "antd/lib/layout/layout";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
//   import { AuthTemplate } from "../../common/templates/AuthTemplate";
//   import "./Register.css";
//   import "antd/dist/antd.css";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
  
  
  const formItemLayout = {
    // labelCol: {
    //   xs: {
    //     span: 24,
    //   },
    //   sm: {
    //     span: 8,
    //   },
    // },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onRegister = (values) => {
    console.log(email, password);
    console.log("Received values of form: ", values);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <BackgroundTemplate>
      <Layout className="main-layout">
        <Header className="main-layout-header">
          <Link to="/">
            <div>
              <LeftOutlined />
            </div>
          </Link>
          <div>SING UP</div>
          <div></div>
        </Header>
        <Content className="main-layout-content">
          <Form
            className="main-form main-form-horizontal"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              className="main-row main-form-item"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter a name.",
                  // whitespace: true,
                },
              ]}
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
                  message: "Please enter a valid phone number.",
                },
              ]}
            >
              <Input
                className="form-item-icon"
                prefix={<PhoneOutlined className="form-item-icon" />}
                placeholder="Phone Number"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "Your password must be between 6 - 16 characters long.",
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

            <Form.Item {...tailFormItemLayout}>
              <div>
                <Button
                  className="login-button"
                  type="primary"
                  htmlType="submit"
                >
                  Next
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Content>
        <Footer className="main-layout-footer">
          {/* <div className="login-button-container">
              <button className="login-button" onClick={onRegister}>
                Next
              </button>
            </div> */}
          <div>
            Already registred?
            <Link to="/login">Log In</Link>
          </div>
        </Footer>
      </Layout>
    </BackgroundTemplate>
  );
};

export default Register;
