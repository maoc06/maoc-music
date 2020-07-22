import React from "react";
import "./Working.css";

const NotYet = ({ type, message, imgSrc }) => {
  return (
    <div className="working-container">
      <img className="scale" src={imgSrc} alt="Singer" />
      <h2>Not {type} Yet</h2>
      <p>{message}</p>
    </div>
  );
};

export default NotYet;
