import React from "react";
import "./style.css";

function Button2(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props["data-value"]}`}
      data-value={props["data-value"]}
    >
      Checkout
    </button>
  );
}

export default Button2;
