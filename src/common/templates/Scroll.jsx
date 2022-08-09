import React from "react";
import "./Scroll.less";

const Scroll = (props) => {
  return (
    <div className="scroll">{props.children}</div>
  );
};

export default Scroll;
