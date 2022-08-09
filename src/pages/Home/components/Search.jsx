import React, { useState } from "react";
import Scroll from "../../../common/templates/Scroll";
import SearchRestaurantsList from "./SearchRestaurantsList";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// const Search = ({ details }) => {
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  // const [searchShow, setSearchShow] = useState(false);

  const filteredRestaurants = details.filter((restaurant) => {
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

  function searchList() {
    // if (searchShow) {
    return (
      <Scroll>
        <SearchRestaurantsList filteredRestaurants={filteredRestaurants} />
      </Scroll>
    );
    // }
  }

  return (
    <>
      {/* <div> */}
      <Input
        placeholder="Search"
        style={{
          width: "25rem",
        }}
        suffix={<SearchOutlined />}
        onChange={handleChangeSearch}
      />
      {/* </div> */}

      {searchList()}
    </>
  );
}

export default Search;
