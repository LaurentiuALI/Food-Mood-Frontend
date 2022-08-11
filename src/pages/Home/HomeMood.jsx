import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnCheckbox from "../../common/components/BtnCheckbox";
import ListOfMoods from "../../common/dummy-data/ListOfMoods";

const { Text, Title } = Typography;

const HomeMood = () => {

  const [moods, setMoods] = useState([]);

  // Add/Remove checked preference from list
  const handleCheck = (event) => {
    var updatedList = [...moods];
    if (event.target.checked) {
      updatedList = [...moods, event.target.value];
      // console.log(updatedList);
    } else {
      updatedList.splice(moods.indexOf(event.target.value), 1);
      // console.log(updatedList);
    }
    setMoods(updatedList);
  };

  // Generate string of checked items
  const checkedItems = moods.length
    ? moods.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) => (moods.includes(item) ? true : false);

  return (
    <Layout className="main-layout">
      <Header className="main-layout-header">
        <div className="main-layout-header-left">
          &nbsp;
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
        <Title
          level={3}
          style={{
            fontFamily: "Georama",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          MOOD
        </Title>
        <div className="main-layout-header-right">&nbsp;</div>
      </Header>
      <Content className="main-layout-content">
        <Text>
          Choose your mood! <br /> Select from the list below and we’ll filter
          restaurants based on your preferences.
        </Text>

        <div className="chk-group-wrapper-mood">
          {ListOfMoods.map(({ name }, index) => {
            return (
              <BtnCheckbox
                id={index}
                key={index}
                value={name}
                label={name}
                checked={isChecked(name)}
                onClick={handleCheck}
              />
            );
          })}
        </div>

        <div className="modal-button-container">
          <Button
            type="primary"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              width: "12.5rem",
            }}
          >
            Next
          </Button>
        </div>
      </Content>
      <Footer className="main-layout-footer"></Footer>
    </Layout>
  );
};

export default HomeMood;
