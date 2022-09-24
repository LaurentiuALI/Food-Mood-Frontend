import React from "react";
import { useState } from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Col, Row, Typography } from "antd";
import "./Home.less";

import restaurant from "../../common/dummy-data/ListOfRestaurants";
import ArraySearch from "../../common/components/ArraySearch";
// import { useLocation } from "react-router-dom";

const { Text, Title } = Typography;

const Home = () => {
  // const { state } = useLocation();
  // const { pref } = state;

  const [restaurants, setRestaurants] = useState(restaurant);
  // const [count, setCount] = useState(restaurant.length);

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 2) {
      let search = await ArraySearch(restaurants, value);
      setRestaurants(search);
      // setCount(search.length);
    } else {
      setRestaurants(restaurant);
      // setCount(restaurant.length);
    }
  };

  return (
    <div>
      <MainPageTemplate>
        <div>{/* <p>Preferences: {state.pref}</p> */}</div>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <div>
            <div>
              {/* <div>Count: {count}</div> */}
              <Input
                placeholder="Search"
                style={{
                  width: "25rem",
                }}
                suffix={<SearchOutlined />}
                onChange={handleOnChange}
              />
            </div>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="home-title">Restaurants</div>
              </Col>
              <Col span={24}>
                <div className="home-subtitle">
                  <div className="home-subtitle-bkg"></div>
                  <div className="home-subtitle-text">
                    {/* <div>Can’t decide ?</div> */}
                    <Title level={3} style={{ color: "#3a423c" }}>
                      Can’t decide ?
                    </Title>
                    {/* <div>Not what you’re looking for? Let us help you!</div> */}
                    <Text style={{ color: "#3a423c" }}>
                      Not what you’re looking for? Let us help you!
                    </Text>
                  </div>
                  <Button
                    type="primary"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      width: "10rem",
                    }}
                  >
                    Mood me up
                  </Button>
                </div>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              {restaurants.map((rest) => (
                <Col key={rest.id} className="gutter-row" span={6}>
                  <div
                    className="img-res"
                    style={{
                      background: `url(${rest.imageSource})`,
                      backgroundSize: "cover",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <div className="img-name">{rest.name}</div>
                  </div>
                  <div className="img-tag">
                    {rest.preferences.slice(0, 2).map((item) => (
                      <div className="img-tag-2" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </MainPageTemplate>
    </div>
  );
};

export default Home;
