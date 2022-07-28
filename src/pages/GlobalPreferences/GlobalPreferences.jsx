import { LeftOutlined } from "@ant-design/icons";
// import { Checkbox, Col, Layout, Row, Typography } from "antd";
import { Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundTemplate from "../../common/templates/BackgroundTemplate";
import ContainerBox from "../../common/templates/ContainerBox";
import "./GlobalPreferences.css";

const { Title } = Typography;

const GlobalPreferences = () => {
  const navigate = useNavigate();

  // test without create a new user
  const onFinish = () => {
    // console.log(data);
    // 👇️ redirect to /home
    navigate("/home");
  };

  //   const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <BackgroundTemplate>
      <ContainerBox>
        <Layout className="main-layout">
          <Header className="main-layout-header">
            <div className="main-layout-header-left">
              <Link to="/">
                <LeftOutlined />
              </Link>
            </div>
            <Title level={4}>PREFERENCES</Title>
            <div className="main-layout-header-right">&nbsp;</div>
          </Header>
          <Content className="main-layout-content">
            <Title level={5}>
              What is your food personality? <br /> Select from the list below
              and we’ll filter restaurants based on your preferences.
            </Title>
            {/* <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Row>
                <Col span={12}>
                  <Checkbox value="A">Healthy</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="B">Greasy</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="C">Cheesy</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="D">Vegetarian</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="E">Vegan</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="F">Meat lover</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="G">Gourmand</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="H">Gourmet</Checkbox>
                </Col>
                
              </Row>
            </Checkbox.Group> */}

            <div className="chk-checkbox-group">
              <div className="chk-row">
                {/* <div className="chk button chk-col">
                  <label className="chk-checkbox-wrapper">
                    <span className="chk-checkbox">
                      <input
                        type="checkbox"
                        className="chk-checkbox-input"
                        value="1"
                      />
                      <span className="chk-checkbox-inner"></span>
                    </span>
                    <span>Healthy</span>
                  </label>
                </div> */}

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Healthy</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Greasy</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Cheesy</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Vegetarian</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Vegan</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Meat lover</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Gourmand</span>
                  </label>
                </div>

                <div className="chk button chk-col">
                  <label>
                    <input type="checkbox" value="1" />
                    <span>Gourmet</span>
                  </label>
                </div>
              </div>
            </div>
          </Content>
          <Footer className="main-layout-footer">
            <div className="pref-button-container">
              <button className="pref-button" onClick={onFinish}>
                Show me Restaurants
              </button>
            </div>
          </Footer>
        </Layout>
      </ContainerBox>
    </BackgroundTemplate>
  );
};

export default GlobalPreferences;
