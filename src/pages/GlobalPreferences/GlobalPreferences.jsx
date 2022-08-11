import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
import BtnCheckbox from "../../common/components/BtnCheckbox";
import "./GlobalPreferences.less";
import ListOfGlobalPreferences from "../../common/dummy-data/ListOfGlobalPreferences";
// import DummyDataUser from "../../common/dummy-data/DummyDataUser";

const { Text, Title } = Typography;

const GlobalPreferences = () => {
  // TO DO
  // // user chosen preferences (it will be useful also for account preferences)
  // const { users } = DummyDataUser;
  // let index = 0;
  // const [preferences, setPreferences] = useState(users[index].prefs);
  // TO DO

  const [preferences, setPreferences] = useState([])

  // Add/Remove checked preference from list
  const handleCheck = (event) => {
    var updatedList = [...preferences];
    if (event.target.checked) {
      updatedList = [...preferences, event.target.value];
      // console.log(updatedList);
    } else {
      updatedList.splice(preferences.indexOf(event.target.value), 1);
      // console.log(updatedList);
    }
    setPreferences(updatedList);
  };

  // Generate string of checked items
  const checkedItems = preferences.length
    ? preferences.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) => (preferences.includes(item) ? true : false);

  const navigate = useNavigate();
  const onHome = () => {
    navigate("/home");

    //pass chosen pref to restaurant page
    // navigate("/home", { state: { pref: checkedItems } });
  };
  const updatePreferences = async () => {
    const token = JSON.parse(sessionStorage.getItem("user")).access_token;
    await axios.put(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/auth/profile2`, preferences, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    onHome();
  };

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header">
            <div className="main-layout-header-left">
              &nbsp;
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
              PREFERENCES
            </Title>
            <div className="main-layout-header-right">&nbsp;</div>
          </Header>
          <Content className="main-layout-content">
            <Text>
              What is your food personality? <br /> Select from the list below
              and we’ll filter restaurants based on your preferences.
            </Text>
            {/* <div className="chk-group-wrapper">
              <BtnCheckbox id="test1" label="Test 1" checked={true} />
              <BtnCheckbox label="Twat 2" checked={true} disabled />
              <BtnCheckbox label="Test 3" disabled />
            </div> */}

            {/* <div>{`Preferences checked: ${checkedItems}`}</div> */}

            <div className="chk-group-wrapper">
              {ListOfGlobalPreferences.map(({ name }, index) => {
                return (
                  <BtnCheckbox
                    id={index}
                    key={index}
                    value={name}
                    label={name}
                    checked={isChecked(name)}
                    onClick={handleCheck}
                  />
                );
              })}
            </div>

            <div className="pref-button-container">
              <Button
                type="primary"
                // onClick={onHome}
                onClick={updatePreferences}
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  width: "12.5rem",
                }}
              >
                Show me Restaurants
              </Button>
            </div>
          </Content>
          <Footer className="main-layout-footer"></Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default GlobalPreferences;
