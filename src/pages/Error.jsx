import React from "react";
import GoHomeButton from "../components/Buttons/GoHomeButton";

const Error = () => {
  return (
    <div className="container-right">
      <div className="error-container">
        <div className="Error-Title">Oops!</div>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>The page you are looking for can not be found</p>
        <GoHomeButton />
      </div>
    </div>
  );
};

export default Error;
