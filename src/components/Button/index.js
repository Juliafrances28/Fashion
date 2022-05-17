import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props["data-value"]}`}
      data-value={props["data-value"]}
    >
      Add to Bag
    </button>
  );
}

export default Button;
