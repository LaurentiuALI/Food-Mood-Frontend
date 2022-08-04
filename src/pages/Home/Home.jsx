import React, { useState } from "react";
import "./Home.less";
import { Button, Col, Input, Layout, Menu, Row } from "antd";
import {
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import RestaurantsList from "./RestaurantsList";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const items = [
  {
    key: "cart",
    icon: <ShoppingCartOutlined />,
  },
  {
    key: "SubMenu",
    icon: <UserOutlined />,
    children: [
      {
        label: "Account",
        icon: <UserOutlined />,
      },
      {
        label: "Preferences",
        icon: <SettingOutlined />,
      },
      {
        label: "Log out",
        icon: <LogoutOutlined />,
      },
    ],
  },
];

const onSearch = (value) => console.log(value);

const Home = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="home-header">
          <div className="logo">FOOD MOOD</div>
          <div>
            <Search
              placeholder="Search"
              onSearch={onSearch}
              enterButton
              allowClear
            />
          </div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
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
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©2022 Created by ...
      </Footer>
    </Layout>
  );
};

export default Home;
