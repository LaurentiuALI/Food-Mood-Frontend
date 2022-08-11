import React, { useState } from "react";
import Scroll from "../../../common/templates/Scroll";
import SearchRestaurantsList from "./SearchRestaurantsList";

import { Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// function Search({ details }) {
const Search = (props) => {
  const [searchField, setSearchField] = useState("");
  // const [searchShow, setSearchShow] = useState(false);

  const filteredRestaurants = props.details.filter((restaurant) => {
    return (
      // restaurant.name.toLowerCase().includes(searchField.toLowerCase()) ||
      // restaurant.preferences.toLowerCase().includes(searchField.toLowerCase())
      restaurant.name.toLowerCase().match(new RegExp(searchField, "g")) ||
      restaurant.preferences.filter((item) =>
        item.toLowerCase().match(new RegExp(searchField, "g"))
      ).length > 0
    );
  });

  const handleChangeSearch = (e) => {
    setSearchField(e.target.value);
    // if (e.target.value === "") {
    //   setSearchShow(false);
    // } else {
    //   setSearchShow(true);
    // }
  };

  return (
    <>
      {/* <div> */}
      {/*<Input*/}
      {/*  placeholder="Search"*/}
      {/*  style={{*/}
      {/*    width: "25rem",*/}
      {/*  }}*/}
      {/*  suffix={<SearchOutlined />}*/}
      {/*  onChange={handleChangeSearch}*/}
      {/*/>*/}
      {/* </div> */}
      <div style={{ paddingTop: "3rem" }}></div>
      <Scroll>
        <Row gutter={[16, 16]}>
          {filteredRestaurants.map((restaurant) => (
            <SearchRestaurantsList
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              img={restaurant.imageSource}
              preferences={restaurant.preferences}
            />
          ))}
        </Row>
      </Scroll>
    </>
  );
};

export default Search;
