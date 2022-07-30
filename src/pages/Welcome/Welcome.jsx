import React from "react";
import "./Welcome.less";
import { useNavigate } from "react-router-dom";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";

import { Button, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

const { Text, Title } = Typography;

const Welcome = () => {
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate("/register");
  };
  const onLogIn = () => {
    navigate("/login");
  };

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout1">
          <Header className="main-layout-header"></Header>
          <Content className="main-layout-content">
            <Title className="welcome__title">FOOD MOOD</Title>
            <Title
              className="welcome__subtitle"
              level={5}
              style={{ color: "#7A3C2A" }}
            >
              DIFFERENT DELICIOUS SIMPLE
            </Title>

            <Text className="welcome__description">
              Trying to find your taste? <br /> Sign Up and let’s go on a
              delicious journey!
            </Text>
            <div className="welcome__buttons-container">
              {/* <Link to="/register">Sign Up</Link>
              <Link to="/login">Log In</Link> */}

              <Button
                type="primary"
                onClick={onSignUp}
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  width: "7.5rem",
                }}
              >
                Sign Up
              </Button>
              <Button
                type="primary"
                onClick={onLogIn}
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  width: "7.5rem",
                }}
              >
                Log In
              </Button>
            </div>
          </Content>
          <Footer className="main-layout-footer"></Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default Welcome;
