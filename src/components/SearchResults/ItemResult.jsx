import React from "react";
import "./ItemResult.css";

const ItemResult = ({ text, pic }) => {
  return (
    <div className="item-result">
      <img src={pic} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default ItemResult;
