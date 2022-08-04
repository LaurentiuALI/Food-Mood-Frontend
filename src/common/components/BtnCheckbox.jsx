// import React from 'react'

import { useState } from "react";
import "./BtnCheckbox.less";

const BtnCheckbox = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
      <div className="btnCheckBox">
        <label>
          <input
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
            // className={isChecked ? "checked" : ""}
          />
          <span>{label}</span>
        </label>
        {/* <p>{isChecked ? "Selected" : "Unchecked"}</p> */}
      </div>
    );

// Then in the Checkbox component, we can access the id and use it to associate the input element with the label, like so:
//   return (
//     <div className="checkbox-wrapper">
//       <input
//         id={id}
//         type="checkbox"
//         checked={isChecked}
//         onChange={() => setIsChecked((prev) => !prev)}
//         {...props}
//       />
//       <label htmlFor={id}>{label}</label>
//     </div>
//   );
};

export default BtnCheckbox;
