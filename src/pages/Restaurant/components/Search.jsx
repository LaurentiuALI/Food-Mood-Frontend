import React, { useState } from "react";
import Scroll from "../../../common/templates/Scroll";
import SearchMealsList from "./SearchMealsList";

import { Avatar, Badge, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredMeals = details.filter((meal) => {
    return (
      meal.mealName.toLowerCase().match(new RegExp(searchField, "g")) ||
      meal.mealDescr.toLowerCase().match(new RegExp(searchField, "g"))
      // meal.preferences.filter((item) =>
      //   item.toLowerCase().match(new RegExp(searchField, "g"))
      // ).length > 0
    );
  });

  const handleChangeSearch = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchMealsList
          filteredMeals={filteredMeals}
          // addToCart={addToCart} // TO DO badge CART
        />
      </Scroll>
    );
  }

  //TO DO for badge
  // const [data, setData] = useState("");
  // const [count, setCount] = useState(0);

  // const addToCart = (cartData) => {
  //   // setData(cartData);
  //   setCount(cartData);
  // };
  //TO DO for badge

  return (
    <>
      <div>
        {/* TO DO badge CART */}
        {/* {data} */}
        {/* <Badge count={count}>
          <Avatar shape="square" />
        </Badge> */}
      </div>
      <div>
        <Input
          placeholder="Search"
          style={{
            width: "25rem",
          }}
          suffix={<SearchOutlined />}
          onChange={handleChangeSearch}
        />
        {searchList()}
      </div>
    </>
  );
}

export default Search;
