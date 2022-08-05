import React from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Button, Col, Row } from "antd";
import "./Home.less";

import RestaurantsList from "./RestaurantsList";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { state } = useLocation();
  const { pref } = state;

  return (
    <div>
      <MainPageTemplate>
        <div>
          <p>Preferences: {state.pref}</p>
        </div>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <div>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="home-title">Restaurants</div>
              </Col>
              <Col span={24}>
                <div className="home-subtitle">
                  <div>Can’t decide ?</div>
                  <div>Not what you’re looking for? Let us help you!</div>
                  <Button
                    type="primary"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      width: "7.5rem",
                    }}
                  >
                    Mood me up
                  </Button>
                </div>
              </Col>

              {RestaurantsList.map(({ name, preferences }, index) => {
                return (
                  <Col className="gutter-row" span={6}>
                    <div className="img_res">{name}</div>
                    <div>{preferences}</div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </MainPageTemplate>
    </div>
  );
};

export default Home;
