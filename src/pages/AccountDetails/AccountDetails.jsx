import { useEffect, useState } from "react";
import "./AccountDetails.css";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Content, Header } from "antd/lib/layout/layout";
import { Input, Typography, Row, Col, Form, Select, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { judete } from "../../common/data/judete.json";

const { Title } = Typography;

const AccountDetails = () => {
  // Form states
  const [userName, setUserName] = useState("Alex");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [availableCounties, setAvailableCounties] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  const onUserNameEdit = (e) => setUserName(e);
  //TODO: Make functions to set Form Field states

  const onCountySelect = (e) => {
    setSelectedCounty(e);
    setAvailableCities([]);
    setSelectedCity("");
    const cities = judete.filter((judet) => judet.nume === e)[0].localitati;
    const citiesAscending = [...cities].sort((a, b) =>
      a.nume > b.nume ? 1 : -1
    );
    setAvailableCities(citiesAscending);
  };

  const onCitySelect = (e) => {
    setSelectedCity(e);
  };

  //TODO: Submit button on click function to send data to backend

  useEffect(() => {
    // TODO: Take information stored in database
    setAvailableCounties(judete);
  }, []);

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
                  <Input
                    className="form-input"
                    defaultValue={userName}
                    onChange={(e) => onUserNameEdit(e.target.value)}
                  />
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
                  <Select onChange={(e) => onCountySelect(e)}>
                    {availableCounties.map((county, key) => {
                      return (
                        <Select.Option value={county.nume} key={key}>
                          {county.nume}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item label="City">
                  <Select
                    disabled={availableCities.length === 0}
                    onChange={(e) => onCitySelect(e)}
                    value={selectedCity}
                  >
                    {availableCities.map((city, key) => {
                      return (
                        <Select.Option value={city.nume} key={key}>
                          {city.nume}
                        </Select.Option>
                      );
                    })}
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
