import React from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Col, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./Restaurant.less";

import { Link } from "react-router-dom";
import Search from "./components/Search";
import meal from "../../common/dummy-data/ListOfMeals";

const { Title } = Typography;

const Restaurant = () => {
  return (
    <div>
      <MainPageTemplate>
        <div className="meal-back">
          <Link to="/home">
            <LeftOutlined
              style={{
                color: "#5F7D63",
                stroke: "#5F7D63",
                strokeWidth: "100",
              }}
            />
          </Link>
        </div>
        <div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="rest-title">
                <div className="rest-title-bkg"></div>
                <div className="rest-title-text">
                  <Title
                    level={2}
                    style={{ color: "#3A423C", fontWeight: "400" }}
                  >
                    Restaurant Name
                  </Title>
                </div>
              </div>
            </Col>
          </Row>
          <Search details={meal} />
        </div>
      </MainPageTemplate>
    </div>
  );
};

export default Restaurant;
