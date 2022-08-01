import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
import BtnCheckbox from "./BtnCheckbox";
import "./GlobalPreferences.less";

const { Text, Title } = Typography;

const GlobalPreferences = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/home");
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
            <div className="chk-group-wrapper">
              <BtnCheckbox id="test1" label="Healthy" checked={true} />
              <BtnCheckbox label="Greasy" checked={true} disabled />
              <BtnCheckbox label="Cheesy" disabled />
              <BtnCheckbox label="Vegetarian" />
              <BtnCheckbox label="Vegan" />
              <BtnCheckbox label="Meat lover" />
              <BtnCheckbox label="Gourmand" />
              <BtnCheckbox label="Gourmet" />
              <BtnCheckbox label="Gluten free" />
            </div>
            <div className="pref-button-container">
              <Button
                type="primary"
                onClick={onHome}
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
