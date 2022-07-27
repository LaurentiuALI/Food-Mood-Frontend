import React from "react";
import "./BackgroundTemplate.css"

const BackgroundTemplate = (props) => {
  return (
    <div className="background-container">
      {props.children}
    </div>
  )
}

export default BackgroundTemplate
