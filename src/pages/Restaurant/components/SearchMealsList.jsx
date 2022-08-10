import React, { useState } from "react";
import { Col, Row } from "antd";
// import { useNavigate } from "react-router-dom";
import CartCheckbox from "../../../common/components/CartCheckbox";

const SearchMealsList = ({ filteredMeals }) => {
// const SearchMealsList = ({ filteredMeals, addToCart }) => { //TO DO Badge CART

  // const navigate = useNavigate();
  // const onClick = (res) => {
  //   console.log("event: ", res);
  //   navigate("/restaurant");
  // };

  const [meals, setMeals] = useState("");
  // const [count, setCount] = useState(0); //TO DO Badge CART

  // Add/Remove checked preference from list
  const handleCheck = (event) => {
    var updatedList = [...meals];
    if (event.target.checked) {
      updatedList = [...meals, event.target.value];

      //TO DO Badge CART
      // setCount(count + 1);
      // addToCart(count + 1);
    } else {
      updatedList.splice(meals.indexOf(event.target.value), 1);
      
      //TO DO Badge CART
      // let newCount = count - 1;
      // if (newCount < 0) {
      //   newCount = 0;
      // }
      // setCount(newCount);
      // addToCart(newCount);
    }
    setMeals(updatedList);
  };

  // Generate string of checked items
  const checkedItems = meals.length
    ? meals.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) => (meals.includes(item) ? true : false);

  const filteredMeal = filteredMeals.map((meal) => (
    <Col key={meal.id} className="gutter-row" span={8}>
      <div className="meal-card">
        <div className="meal-name">{meal.mealName}</div>
        <div className="meal-price">{meal.mealPrice}</div>
        <div className="meal-descr">{meal.mealDescr}</div>
        <div className="meal-cart">
          <CartCheckbox
            id={meal.id}
            key={meal.id}
            value={meal.mealName}
            label={meal.mealName}
            checked={isChecked(meal.mealName)}
            onClick={handleCheck}
          />
        </div>
      </div>
    </Col>
  ));
  return <Row gutter={[16, 16]}>{filteredMeal}</Row>;
};

export default SearchMealsList;
