import React from "react";
import { Col, Row } from "antd";

const SearchRestaurantsList = ({ filteredRestaurants }) => {
  // function SearchRestaurantsList({ filteredRestaurants }) {
  const filteredRest = filteredRestaurants.map((restaurant) => (
    <Col key={restaurant.id} className="gutter-row" span={6}>
      <div
        className="img-res"
        style={{
          background: `url(${restaurant.imageSource})`,
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="img-name">{restaurant.name}</div>
      </div>

      <div className="img-tag">
        {restaurant.preferences.slice(0, 2).map((item) => (
          <div className="img-tag-2" key={item}>
            {item}
          </div>
        ))}
      </div>
    </Col>
  ));
  return <Row gutter={[16, 16]}>{filteredRest}</Row>;
};

export default SearchRestaurantsList;
