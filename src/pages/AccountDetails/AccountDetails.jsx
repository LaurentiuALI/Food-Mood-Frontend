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
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
            <Col span={12}>Account details</Col>
            <Col span={12}>Password change</Col>
          </Row>
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
                <Form.Item label="Input">
                  <Input className="form-input" />
                </Form.Item>

                <Form.Item label="Select">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Content>
      </MainPageTemplate>
    </div>
  );
};

export default AccountDetails;
