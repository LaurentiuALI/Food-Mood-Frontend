import React from "react";
import { CurrencyContext } from "./currency-context";
import DATA from "./ListOfMeals";
import Books from "./Books";

// const DATA = [
//   {
//     id: "1",
//     title: "The Road to React",
//     price: 19.99,
//   },
//   {
//     id: "2",
//     title: "The Road to GraphQL",
//     price: 29.99,
//   },
// ];

// REACT'S USECONTEXT HOOK
const App = () => {
  return (
    <div>
      <Books list={DATA} />
    </div>
  );
};

// const Books = ({ list }) => {
//   return (
//     <ul>
//       {list.map((item) => (
//         <Book key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };

// const Book = ({ item }) => {
//   return (
//     <li>
//       {item.title} - {item.price}
//     </li>
//   );
// };

export default App;
