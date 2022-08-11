import React, { useState } from "react";
import { Col } from "antd";
// import { useNavigate } from "react-router-dom";
import CartCheckbox from "../../../common/components/CartCheckbox";

// const SearchMealsList = ({ filteredMeals }) => {
const SearchMealsList = (props) => {
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

  return (
      <Col key={props.id} className="gutter-row" span={8}>
        <div className="meal-card">
          <div className="meal-name">{props.title}</div>
          <div className="meal-price">{props.price}</div>
          <div className="meal-descr">{props.description}</div>
          <div className="meal-cart">
            <CartCheckbox
              id={props.id}
              key={props.id}
              value={props.title}
              label={props.title}
              checked={isChecked(props.title)}
              onClick={handleCheck}
            />
          </div>
        </div>
      </Col>
  );
};

export default SearchMealsList;
