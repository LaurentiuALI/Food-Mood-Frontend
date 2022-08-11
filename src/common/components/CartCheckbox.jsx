import { useState } from "react";
import "./CartCheckbox.less";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartCheckbox = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
      <div className="cartCheckBox">
        <label>
          <input
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
            // className={isChecked ? "checked" : ""}
          />
          <span><ShoppingCartOutlined /></span>
        </label>
        {/* <p>{isChecked ? "Selected" : "Unchecked"}</p> */}
      </div>
    );
};

export default CartCheckbox;
