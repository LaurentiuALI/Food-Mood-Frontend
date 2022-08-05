import "./AccountDetails.css";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Content, Header } from "antd/lib/layout/layout";
import {
  Dropdown,
  Input,
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Form,
  Select,
  Space,
  Button,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { judete } from "src/common/data/judete.json";

const { Title } = Typography;

const AccountDetails = () => {
  return (
    <div>
      <MainPageTemplate>
        <Header className="account-preferences-menu">
          <Link to={"/home"}>
            <LeftOutlined className={"back-arrow"} />
          </Link>
          <Title className={"account-account"}>Account</Title>
          <Link to={"/account-preferences"}>
            <Title className={"account-preferences"}>Preferences</Title>
          </Link>
        </Header>
        <Content>
          <Row className="header-grid">
            <Col span={12}>
              <Title className="header-title">Account details</Title>
            </Col>
            <Col span={12}>
              <Title className="header-title">Password change</Title>
            </Col>
          </Row>
          {/*-----------------LEFT SIDE-----------------*/}
          <Row className="content-grid">
            <Col span={12}>
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: "default",
                }}
              >
                <Form.Item label="Name">
                  <Input className="form-input" />
                </Form.Item>

                <Form.Item label="Email">
                  <Input className="form-input" />
                </Form.Item>

                <Form.Item label="Phone number">
                  <Input className="form-input" />
                </Form.Item>

                <Form.Item label="Address">
                  <Input className="form-input" />
                </Form.Item>

                <Form.Item label="County">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="City">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            {/*-----------------RIGHT SIDE-----------------*/}
            <Col span={12} className="change-password-container">
              <Form
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 14,
                }}
                initialValues={{
                  size: "default",
                }}
              >
                <Form.Item
                  label="Current password"
                  className="password-field-label"
                >
                  <Input.Password className="form-input" />
                </Form.Item>

                <Form.Item label="New password">
                  <Input.Password />
                </Form.Item>

                <Form.Item label="Confirm new password">
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submitButton"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </Form>

              {/*  <Col span={6}></Col>*/}

              {/*  <Col span={6} className="submit-button-container">*/}
              {/*    <Button*/}
              {/*      type="primary"*/}
              {/*      htmlType="submit"*/}
              {/*      className="submitButton"*/}
              {/*    >*/}
              {/*      Save Changes*/}
              {/*    </Button>*/}
              {/*  </Col>*/}
            </Col>
          </Row>
        </Content>
      </MainPageTemplate>
    </div>
  );
};

export default AccountDetails;
