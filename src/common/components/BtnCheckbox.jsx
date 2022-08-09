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
};

export default BtnCheckbox;
