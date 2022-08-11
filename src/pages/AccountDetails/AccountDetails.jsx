import { useEffect, useState } from "react";
import "./AccountDetails.css";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Content, Header } from "antd/lib/layout/layout";
import {
  Input,
  Typography,
  Row,
  Col,
  Form,
  Select,
  Button,
  message,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { judete } from "../../common/data/judete.json";
import axios from "axios";

const { Title } = Typography;

const AccountDetails = () => {
  // Form states
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmNewPassword, setConfirmNewPassword] = useState("");
  // const [changePassword, setChangePassword] = useState(false);

  const [availableCounties, setAvailableCounties] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  const [errors, setErrors] = useState({});

  const onUserNameEdit = (e) => setUserName(e);
  const onEmailEdit = (e) => setEmail(e);
  const onPhoneNumberEdit = (e) => setPhoneNumber(e);
  const onAddressEdit = (e) => setAddress(e);

  // const onCurrentPasswordEdit = (e) => setCurrentPassword(e);
  // const onNewPasswordEdit = (e) => setNewPassword(e);
  // const onConfirmNewPasswordEdit = (e) => {
  //   setConfirmNewPassword(e);
  //   if (confirmNewPassword.trim() === "") {
  //     setChangePassword(false);
  //   } else {
  //     setChangePassword(true);
  //   }
  // };

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

  const success = (messageContent) => {
    message.success({
      content: messageContent,
      className: "success-message",
      style: {
        marginTop: "7.5vh",
      },
      icon: " ",
    });
  };

  const failed = () => {
    message.error({
      content: "Couldn't update your profile",
      className: "error-message",
      style: {
        marginTop: "7.5vh",
      },
      icon: " ",
    });
  };

  //TODO: Validations

  const onProfileUpdate = async () => {
    const token = JSON.parse(sessionStorage.getItem("user")).access_token;
    await axios
      .put(
        `${
          import.meta.env.VITE_API_URL ||
          "http://localhost:3000/users/profileUpdate"
        }`,
        {
          name: userName,
          // email: email,
          phoneNumber: phoneNumber,
          address: address,
          county: selectedCounty,
          city: selectedCity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setErrors({});
        success("Successfully updated your information.");
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error.response.data.message);
        }
        failed();
      });
  };

  useEffect(() => {
    // TODO: Take information from database
    const token = JSON.parse(sessionStorage.getItem("user")).access_token;
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL ||
          "http://localhost:3000/users/profileData"
        }`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response.data);
        setUserName(response.data.userData.name);
        setEmail(response.data.userData.email);
        setPhoneNumber(response.data.userData.phoneNumber);
        setAddress(response.data.userData.address);
        setSelectedCounty(response.data.userData.county);
        setSelectedCity(response.data.userData.city);

        const cities = judete.filter(
          (judet) => judet.nume === response.data.userData.county
        )[0].localitati;
        const citiesAscending = [...cities].sort((a, b) =>
          a.nume > b.nume ? 1 : -1
        );
        setAvailableCities(citiesAscending);
      })
      .catch((e) => {
        // e.response.data.message);
        console.log(e.response);
      });
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
                {/*TODO: Form validations venite din backend pentru campuri*/}
                <Form.Item
                  label="Name"
                  validateStatus={
                    errors.hasOwnProperty("name") ? "error" : "validating"
                  }
                  help={errors.hasOwnProperty("name") ? errors.name : null}
                >
                  <Input
                    className="form-input"
                    value={userName}
                    onChange={(e) => onUserNameEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  validateStatus={
                    errors.hasOwnProperty("email") ? "error" : "validating"
                  }
                  help={errors.hasOwnProperty("email") ? errors.email : null}
                >
                  <Input
                    className="form-input"
                    value={email}
                    readOnly={true}
                    onChange={(e) => onEmailEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Phone number"
                  validateStatus={
                    errors.hasOwnProperty("phoneNumber")
                      ? "error"
                      : "validating"
                  }
                  help={
                    errors.hasOwnProperty("phoneNumber")
                      ? errors.phoneNumber
                      : null
                  }
                >
                  <Input
                    className="form-input"
                    value={phoneNumber}
                    onChange={(e) => onPhoneNumberEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Address"
                  validateStatus={
                    errors.hasOwnProperty("address") ? "error" : "validating"
                  }
                  help={
                    errors.hasOwnProperty("address") ? errors.address : null
                  }
                >
                  <Input
                    className="form-input"
                    value={address}
                    onChange={(e) => onAddressEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item label="County">
                  <Select
                    value={selectedCounty}
                    onChange={(e) => onCountySelect(e)}
                  >
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
                  <Input.Password
                    className="form-input"
                    // onChange={(e) => onCurrentPasswordEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item label="New password">
                  <Input.Password
                  // onChange={(e) => onNewPasswordEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item label="Confirm new password">
                  <Input.Password
                  // onChange={(e) => onConfirmNewPasswordEdit(e.target.value)}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submitButton"
                    onClick={onProfileUpdate}
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </Form>

              {/*//TODO: Move "Save Changes" button into correct position*/}
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
