import React, { useState } from "react";
import Scroll from "../../../common/templates/Scroll";
import SearchMealsList from "./SearchMealsList";

import { Avatar, Badge, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// function Search({ details }) {
const Search = (props) => {
  const [searchField, setSearchField] = useState("");

  const filteredMeals = props.details.filter((meal) => {
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
      </div>
      <Scroll>
        <Row gutter={[16, 16]}>
          {filteredMeals.map((meal) => (
            <SearchMealsList
              key={meal.id}
              id={meal.id}
              title={meal.mealName}
              price={meal.mealPrice}
              description={meal.mealDescr}
            />
          ))}
        </Row>
      </Scroll>
    </>
  );
};

export default Search;
