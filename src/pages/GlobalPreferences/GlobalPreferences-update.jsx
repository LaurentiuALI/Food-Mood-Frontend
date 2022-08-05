import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
import BtnCheckbox from "./BtnCheckbox";
import "./GlobalPreferences.less";
const { Text, Title } = Typography;
const GlobalPreferences = () => {
  const [preferences, setPreferences] = useState([])
  const onChange = (e) =>{
    if(e.target.checked){
      setPreferences([...preferences, e.target.className])
    }
    else if(!e.target.checked){
      setPreferences(preferences.filter((option) =>{
        return option !== e.target.className;
      }))
    }
  }
  const navigate = useNavigate();
  const onHome = () => {
    navigate("/home");
  };
  const updatePreferences = async () => {
      const token = JSON.parse(sessionStorage.getItem('user')).access_token;
      await axios.put(
        'http://localhost:3000/auth/profile2', 
        preferences,
        { headers: {
            "Authorization": `Bearer ${token}`
          } 
        }
      )
      onHome();
  }
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
              <BtnCheckbox label="Healthy" className="Healthy" onClick = { onChange}/>
              <BtnCheckbox label="Greasy" className="Greasy" onClick = { onChange} />
              <BtnCheckbox label="Cheesy" className="Cheesy" onClick = { onChange} />
              <BtnCheckbox label="Vegetarian" className="Vegetarian" onClick = { onChange}  />
              <BtnCheckbox label="Vegan" className="Vegan" onClick = { onChange} />
              <BtnCheckbox label="Meat lover" className="Meat lover" onClick = { onChange} />
              <BtnCheckbox label="Gourmand" className="Gourmand" onClick = { onChange} />
              <BtnCheckbox label="Gourmet" className="Gourmet" onClick = { onChange} />
              <BtnCheckbox label="Gluten free" className="Gluten free" onClick = { onChange} />
            </div>
            <div className="pref-button-container">
              <Button
                type="primary"
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
