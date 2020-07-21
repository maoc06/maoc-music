import React from "react";
import "./GoHomeButton.css";
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    <Link to="/">
      <button className="go-home-button">GO HOME</button>
    </Link>
  );
};

export default GoHomeButton;
