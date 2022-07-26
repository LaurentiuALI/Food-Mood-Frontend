import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";

export const Welcome = () => {
// const Welcome = () => {
  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header"></Header>
          <Content className="main-layout-content">
            <h1 className="welcome__title">FOOD MOOD</h1>
            <h3 className="welcome__subtitle">DIFFERENT DELICIOUS SIMPLE</h3>
            <p className="welcome__description">
              Trying to find your taste? <br /> Sign Up and let’s go on a
              delicious journey!
            </p>
            <div className="welcome__buttons-container">
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          </Content>
          <Footer className="main-layout-footer"></Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

// export default Welcome;
