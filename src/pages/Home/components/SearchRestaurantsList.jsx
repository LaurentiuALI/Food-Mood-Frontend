import React from "react";
import { Col } from "antd";
import { useNavigate } from "react-router-dom";

// const SearchRestaurantsList = ({ filteredRestaurants }) => {
const SearchRestaurantsList = (props) => {
  const navigate = useNavigate();
  const onClick = (res) => {
    console.log("event: ", res);
    navigate("/restaurant");
  };

  return (
      <Col key={props.id} className="gutter-row" span={6}>
        <div
          className="img-res"
          style={{
            background: `url(${props.img})`,
            backgroundPositionY: "50%",
            backgroundSize: "cover",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={() => onClick(props.id)}
        >
          <div className="img-name">{props.name}</div>
        </div>

        <div className="img-tag">
          {props.preferences.slice(0, 2).map((item) => (
            <div className="img-tag-2" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Col>
  );
};

export default SearchRestaurantsList;
