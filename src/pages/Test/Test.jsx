import { useState } from "react";
import ListPreferences from "./ListPreferences";
import "./Test.less";

const getFormatted = (binary) => `${binary.toFixed()}`;
const getBinaryFormatted = (binary) => `${binary.toString(2)}`;
// const getBinaryFormated = (binary) => `${parseInt(binary, 2)}`;

// function catalin (x) {
// let n = x; // The number you want to turn into an array of power of 2
let n = 110011;
let binaryToArray = [];
let binaryRepresentation = parseInt(n, 2).toString(2);
binaryRepresentation = binaryRepresentation.split("").reverse().join(""); // You need to reverse the string to get the power of 2 corresponding
for (let i = binaryRepresentation.length - 1; i >= 0; i--) {
  if (binaryRepresentation[i] == 1) {
    binaryToArray.push(Math.pow(2, i));
  }
}
// }
console.log(binaryToArray); // Check the array
// catalin("11011")

const Test = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(ListPreferences.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPref = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + ListPreferences[index].binary;
      }
      return sum;
    }, 0);

    setTotal(totalPref);
  };

  // const getParseFormated = (binary) => `${parseInt(binary, 2)}`;

  return (
    <div>
      <div className="App">
        <h3>Select ListPreferences</h3>
        <ul className="preferences-list">
          {ListPreferences.map(({ name, binary }, index) => {
            return (
              <li key={index}>
                <div className="preferences-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="right-section">{getFormatted(binary)}</div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="ListPreferences-list-item">
              <div className="left-section">Total:</div>
              <div className="right-section">{getFormatted(total)}</div>
            </div>
          </li>
          <li>
            <div className="ListPreferences-list-item">
              <div className="left-section">Total BYTE:</div>
              <div className="right-section">{getBinaryFormatted(total)}</div>
            </div>
          </li>
          <li>
            <div className="ListPreferences-list-item">
              <div className="left-section">Array:</div>
              <div className="right-section"></div>
            </div>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Test;
