import React, { useState } from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Button, Col, Row, Typography, Modal } from "antd";
import "./Home.less";
// import { useLocation } from "react-router-dom";

import Search from "./components/Search";
import restaurant from "../../common/dummy-data/ListOfRestaurants";

import HomeMood from "./HomeMood";

const { Text, Title } = Typography;

const Test = () => {

  // const { state } = useLocation();
  // const { pref } = state;

  const [modalMood, setModalMood] = useState(false);
  // const [modalText, setModalText] = useState("Content of the modal");

  const [modalCravings, setModalCravings] = useState(false);

  // const onBack = () => {
  //   console.log("Back")
  // };
  // const onNext = () => {
  //   console.log("next modal")
  // };

  const onNext = () => {
    console.log("next modal")
    // navigate("/test");

    //pass chosen pref to restaurant page
    // navigate("/home", { state: { pref: checkedItems } });
  };

const [data, setData] = useState('');
  
const childToParent = (childdata) => {
  setData(childdata);
}


  return (
    <div>
      <MainPageTemplate>
        {/* <p>Preferences: {state.pref}</p> */}
        <div>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="home-title">Restaurants</div>
            </Col>
            <Col span={24}>
              <div className="home-subtitle">
                <div className="home-subtitle-bkg"></div>
                <div className="home-subtitle-text">
                  <Title
                    level={2}
                    style={{ color: "#3a423c", fontWeight: "800" }}
                  >
                    Can’t decide ?
                  </Title>
                  <Text style={{ color: "#3a423c", fontWeight: "800" }}>
                    Not what you’re looking for? Let us help you!
                  </Text>
                </div>
                <Button
                  type="primary"
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    width: "12rem",
                  }}
                  onClick={() => setModalMood(true)}
                >
                  Mood me up
                </Button>
              </div>
            </Col>
          </Row>
          <Search details={restaurant} />
        </div>
      </MainPageTemplate>

      <Modal
        closable={false}
        centered
        footer={null}
        visible={modalMood}
        // onOk={() => setModalMood(false)}
        onCancel={() => setModalMood(false)}
      >
        {/* <p>MOOD</p>
        <p>{modalText}</p> */}
        {data}
        <HomeMood childToParent={childToParent}
          // onBack
          // onNext
        />
        <div className="modal-button-container">
          <Button
            type="primary"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              width: "12rem",
            }}
            // onClick={() => setModalCravings(true)}
          >
            Test
          </Button>
        </div>
      </Modal>

      <Modal
        closable={false}
        centered
        footer={null}
        visible={modalCravings}
        // onOk={() => setModalCravings(false)}
        onCancel={() => setModalCravings(false)}
      >
        <p>CRAVING</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <div>
          <Button
            type="primary"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              width: "12rem",
            }}
            // onClick={() => setModalCravings(true)}
          >
            Next
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Test;
